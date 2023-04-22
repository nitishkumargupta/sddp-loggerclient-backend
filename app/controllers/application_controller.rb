class ApplicationController < ActionController::API
  # setting logged-in user before each action is eecuted
  before_action :set_current_user

  # default response if someone tries to access unauthorised end-point
  rescue_from RoleCheckError do |_exception|
    render json: { error: "You don't have permission to perform this action" }, status: :forbidden
  end

  def set_current_user
    # fetching bearer token from the request's headers
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

  def fallback_index_html
    render file: Rails.root.join('public', 'index.html'), layout: false, status: :ok
  end


end
