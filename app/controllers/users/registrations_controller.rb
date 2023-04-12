class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json
  before_action :check_params, only: :create

  def create
    user = User.find_by(email: params[:user][:email])
    if user
      render json: { message: "User already exists. Please try with another email" }, status: 409
      return
    end
    super
  end

  private

  def respond_with(resource, _opts = {})
    register_success && return if resource.persisted?

    register_failed
  end

  def register_success
    render json: { message: 'Signed up sucessfully.' }
  end

  def register_failed
    render json: { message: "Something went wrong." }
  end

  def check_params
    unless params[:user][:email].present? && params[:user][:password].present?
      render json: { message: "Required fields are missing" }, status: 422
    end
  end
end