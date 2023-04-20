class OrganisationsController < ApplicationController
  include RoleCheck
  include PaginationAndSorting
  include ResponseHeaders
  before_action -> { check_role_permissions('ROLE_ADMIN ROLE_ORGANIZATION_ADMIN']) }, only: [:index, :show, :update]
  # Only Super Admin can perform create and destroy action
  before_action -> { check_role_permissions('ROLE_ADMIN']) }, only: [:create, :destroy]
  before_action :set_organisation, only: [:show, :update]

  def index
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

  # Create new organisation
  def create
    organisation = Organisation.new(organisation_params)
    if params[:users].present?
      # Creating default user for organisation with admin access
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
      # Organisation admin can only update the associated organisation
      if @organisation.update(organisation_update_params)
        if params[:users].present? && params[:users]["password"].present?
          # Update organisation admin password if present in the request
          OrganisationUserCreator.new(@organisation, params[:users], current_user).update_password
        end
        render json: @organisation.to_json
      else
        render json: @organisation.errors, status: :unprocessable_entity
      end
    elsif current_user_has_role?('ROLE_ADMIN')
      # Super Admin can update any organisation so fetching organisation based on id
      organisation = Organisation.find_by(id: params[:id])
      if organisation&.update(organisation_update_params)
        render json: organisation, status: :ok
      else
        render json: organisation&.errors || { error: "Organisation not found" }, status: :unprocessable_entity
      end
    end
  end

  # Delete existing organisation
  def destroy
    organisation = Organisation.find_by(id: params[:id])
    if organisation&.destroy
      render json: { message: "Organisation deleted" }, status: :ok
    else
      render json: { error: "Organisation not found" }, status: :not_found
    end
  end

  private

  # Fetching organisation based on logged-in user
  def set_organisation
    @organisation = @current_user.organisation
  end

  # whitelisted params for create action
  def organisation_params
    params.require(:organisation).permit(:name, :address, :code, :email, user_attributes: [:password])
  end

  # # whitelisted params for update action
  def organisation_update_params
    params.require(:organisation).permit(:name, :address, :email)
  end
end
