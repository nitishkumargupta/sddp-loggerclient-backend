require 'jwt'

class AuthenticationController < ApplicationController
  def authenticate
    user = User.find_for_database_authentication(email: params[:email])
    if user&.valid_password?(params[:password])
      render json: { id_token: generate_token(user) }, status: :ok
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end

  private

  def generate_token(user)
    payload = {
      sub: user.email,
      auth: 'ROLE_ADMIN,ROLE_USER',
      exp: Time.now.to_i + 4 * 3600
    }
    algorithm = 'HS512'
    JWT.encode(payload, 'SECRET_KEY', algorithm)
  end
end
