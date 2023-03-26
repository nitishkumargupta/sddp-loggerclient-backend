class OrganisationsController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[create]
  before_action :set_organisation, only: %i[ show update destroy ]

  def show
    render json: @organisation.to_json
  end

  def create
    organisation = Organisation.new(organisation_params)
    OrganisationUserCreator.new(organisation, params[:users]).create_admin_user
    if organisation.save
      render json: organisation.to_json, status: 200
    else
      render json: organisation.errors, status: unprocessable_entity
    end
  end

  # PATCH/PUT /organisations/1
  def update
    if @organisation.update(update_params)
      if params[:users]["password"].present?
        OrganisationUserCreator.new(@organisation,params[:users],current_user).update_password
      end
      render json: @organisation.to_json
    else
      render json: @organisation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /organisations/1
  def destroy
    @organisation.destroy
  end

  private
    def set_organisation
      @organisation = current_user.organisation
    end

    def organisation_params
      params.require(:organisation).permit(:name, :address, :code, :email, user_attributes: [:password])
    end

    def update_params
      params.require(:organisation).permit(:name, :address, user_attributes: [:password])
    end
end
