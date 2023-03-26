# app/controllers/account_controller.rb
class AccountController < ApplicationController
  # before_action :authenticate_user

  def get_account
    if @current_user
      user_data = @current_user.as_json(
        only: [:id, :email, :created_at, :updated_at, :first_name, :last_name],
        include: {
          authorities: { only: [:name] }
        }
      )

      # Extract the 'name' from each authority and replace the authorities array with their names
      user_data["authorities"] = user_data["authorities"].map { |authority| authority["name"] }

      render json: user_data, status: :ok
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end


  def save_account
    user_login = current_user.email # Assuming `current_user` returns the authenticated user
    raise 'Current user login not found' if user_login.nil?

    existing_user = User.find_by('lower(email) = ?', user_login.downcase)
    if existing_user.present? && existing_user.email.downcase != user_login.downcase
      render json: { error: 'Email already used' }, status: :bad_request
      return
    end

    user = User.find_by(email: user_login)
    unless user.present?
      render json: { error: 'User could not be found' }, status: :internal_server_error
      return
    end

    user.update!(
      first_name: params[:first_name],
      last_name: params[:last_name],
    )

    head :ok
  end


  def request_password_reset
    # Your logic to initiate the password reset process
  end

  def finish_password_reset
    # Your logic to complete the password reset process
  end

  def change_password
    # Your logic to change the password for the authenticated user
  end


  private

  # We do not need this function because it is already defined, and called in the application controller before each action

  # def authenticate_user
  #   auth_header = request.headers['Authorization']
  #   token = auth_header.split(' ')[1]
  #   return head :unauthorized if token.nil?

  #   begin
  #     decoded_token = JWT.decode(token, 'SECRET_KEY', true, { algorithm: 'HS512' })
  #     @current_user = User.find_by(email: decoded_token[0]['sub'])
  #   rescue JWT::DecodeError
  #     head :unauthorized
  #   end
  # end
end
