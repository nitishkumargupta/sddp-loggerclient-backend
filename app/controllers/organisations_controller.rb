class OrganisationsController < ApplicationController
  include RoleCheck
  include PaginationAndSorting
  include ResponseHeaders
  before_action :set_organisation, only: [:show, :update]

  def index
    check_role_permissions(%w[ROLE_ADMIN ROLE_ORGANIZATION_ADMIN])
    query = params[:query]
    q = params[:q]

    if current_user_has_role?('ROLE_ADMIN')
      @organisations = Organisation.ransack(q).result
    elsif current_user_has_role?('ROLE_ORGANIZATION_ADMIN')
      @organisations = Organisation.where(id: current_user.organisation_id)
    end

    @organisations = apply_pagination_and_sorting(@organisations, query)

    add_total_count_header do
      render json: @organisations, methods: [:user_count, :applications_count], status: :ok
    end
  end
  def show
    check_role_permissions(%w[ROLE_ORGANIZATION_ADMIN ROLE_ADMIN])
    if current_user_has_role?('ROLE_ORGANIZATION_ADMIN')
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
    check_role_permissions(['ROLE_ADMIN'])
    organisation = Organisation.new(organisation_params)
    if params[:users].present?
      OrganisationUserCreator.new(organisation, params[:users]).create_admin_user
    end

    if organisation.save
      render json: organisation.to_json, status: 200
    else
      render json: organisation.errors, status: :unprocessable_entity
    end
  end

  def update
    if current_user_has_role?('ROLE_ORGANIZATION_ADMIN')
      if @organisation.update(organisation_update_params)
        if params[:users].present? && params[:users]["password"].present?
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
    end
  end

  def destroy
    check_role_permissions(['ROLE_ADMIN'])
    organisation = Organisation.find_by(id: params[:id])
    if organisation&.destroy
      render json: { message: "Organisation deleted" }, status: :ok
    else
      render json: { error: "Organisation not found" }, status: :not_found
    end
  end

  private
  def set_organisation
    @organisation = @current_user.organisation
  end

  def organisation_params
    params.require(:organisation).permit(:name, :address, :code, :email, user_attributes: [:password])
  end

  def organisation_update_params
    params.require(:organisation).permit(:name, :address, :email)
  end
end
