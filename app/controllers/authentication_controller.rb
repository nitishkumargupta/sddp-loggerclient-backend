
require 'jwt'

class AuthenticationController < ApplicationController
  def authenticate
    user = User.find_for_database_authentication(email: params[:email])
    if user&.valid_password?(params[:password])
      render json: { id_token: generate_jwt_token(user) }, status: :ok
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end

  private

  def generate_jwt_token(user)
    payload = {
      sub: user.email,
      exp: Time.now.to_i + 4 * 3600,
      authorities: user.authorities.pluck(:name),
    }
    algorithm = 'HS512'
    JWT.encode(payload, Rails.application.credentials.devise[:jwt_secret_key], algorithm)
  end
end
