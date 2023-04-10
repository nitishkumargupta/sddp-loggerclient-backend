class OrganisationsController < ApplicationController
  include RoleCheck
  include PaginationAndSorting
  before_action -> { check_role_permissions(['ROLE_ADMIN', 'ROLE_ORGANIZATION']) }, only: [:update]

  # @example  GET /api/organizations?q[name_cont]=name&q[code_lt]=10
  def index
    check_role_permissions(['ROLE_ADMIN'])
    query = params[:query]
    q = params[:q]
    organizations = Organisation.ransack(q).result
    organizations = apply_pagination_and_sorting(organizations, query)
    render json: organizations, methods: :user_count, status: :ok
  end


  def show
    check_role_permissions(['ROLE_ORGANIZATION', 'ROLE_ADMIN'])

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
    end
  end

  # DELETE /organisations/1
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

  def update_params
    params.require(:organisation).permit(:name, :address, user_attributes: [:password])
  end

  def organisation_update_params
    params.require(:organisation).permit(:name, :code, :address, :email)
  end
end
