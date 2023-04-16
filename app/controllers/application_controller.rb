class ApplicationController < ActionController::API
  before_action :set_current_user

  rescue_from RoleCheckError do |_exception|
    render json: { error: "You don't have permission to perform this action" }, status: :forbidden
  end

  def set_current_user
    auth_header = request.headers['Authorization']
    return if auth_header.nil?

    auth_parts = auth_header.split(' ')
    return head :unauthorized if auth_parts.length < 2

    token = auth_parts[1]
    return head :unauthorized if token.nil?

    begin
      decoded_token = JWT.decode(token, Rails.application.credentials.devise[:jwt_secret_key], true, { algorithm: 'HS512' })
      @current_user = User.find_by(email: decoded_token[0]['sub'])
    rescue JWT::DecodeError
      head :unauthorized
    end
  end

end
