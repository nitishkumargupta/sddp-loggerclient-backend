class OrganisationsController < ApplicationController
  before_action :check_role_permissions, only: [:update]

  # app/controllers/organisations_controller.rb
  def index
    if current_user_has_role?('ROLE_ADMIN')
      page = params[:page] || 1
      size = params[:size] || 20
      sort = params[:sort] || 'id,desc'
      sort_column, sort_direction = sort.split(',')

      organisations = Organisation.order("#{sort_column} #{sort_direction}").paginate(page: page, per_page: size)
      response.headers['X-Total-Count'] = Organisation.count.to_s

      render json: organisations, methods: :user_count, status: :ok
    else
      render json: { error: "You don't have permission to perform this action" }, status: :forbidden
    end
  end

  def show
    if current_user_has_role?('ROLE_ORGANIZATION')
      render json: @organisation.to_json
    elsif current_user_has_role?('ROLE_ADMIN')
      organisation = Organisation.find_by(id: params[:id])
      if organisation
        render json: organisation, status: :ok
      else
        render json: { error: "Organisation not found" }, status: :not_found
      end
    end
  end

  def create
    if current_user_has_role?('ROLE_ADMIN')
      organisation = Organisation.new(organisation_params)
      if params[:users].present?
        OrganisationUserCreator.new(organisation, params[:users]).create_admin_user
      end
      if organisation.save
        render json: organisation.to_json, status: 200
      else
        render json: organisation.errors, status: unprocessable_entity
      end
    else
      render json: { error: "You don't have permission to perform this action" }, status: :forbidden
    end
  end

  def update
    if current_user_has_role?('ROLE_ORGANIZATION')
      if @organisation.update(update_params)
        if params[:users]["password"].present?
          OrganisationUserCreator.new(@organisation, params[:users], current_user).update_password
        end
        render json: @organisation.to_json
      else
        render json: @organisation.errors, status: :unprocessable_entity
      end
    elsif current_user_has_role?('ROLE_ADMIN')
      organisation = Organisation.find_by(id: params[:id])
      if organisation&.update(organisation_update_params)
        render json: organisation, status: :ok
      else
        render json: organisation&.errors || { error: "Organisation not found" }, status: :unprocessable_entity
      end
    else
      render json: { error: "You don't have permission to perform this action" }, status: :forbidden
    end
  end

  # DELETE /organisations/1
  def destroy
    if current_user_has_role?('ROLE_ADMIN')
      organisation = Organisation.find_by(id: params[:id])
      if organisation&.destroy
        render json: { message: "Organisation deleted" }, status: :ok
      else
        render json: { error: "Organisation not found" }, status: :not_found
      end
    else
      render json: { error: "You don't have permission to perform this action" }, status: :forbidden
    end
  end

  private
  def check_role_permissions
    unless current_user_has_role?('ROLE_ADMIN') || current_user_has_role?('ROLE_ORGANIZATION')
      render json: { error: "You don't have permission to perform this action" }, status: :forbidden
    end
  end

  def current_user_has_role?(role)
    @current_user.authorities.exists?(name: role)
  end
  def set_organisation
    @organisation = @current_user.organisation
  end

  def organisation_params
    params.require(:organisation).permit(:name, :address, :code, :email, user_attributes: [:password])
  end

  def update_params
    params.require(:organisation).permit(:name, :address, user_attributes: [:password])
  end

  def organisation_update_params
    params.require(:organisation).permit(:name, :code, :address, :email)
  end
end
