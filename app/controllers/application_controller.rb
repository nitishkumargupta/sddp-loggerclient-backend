class ApplicationController < ActionController::API
  before_action :set_current_user

  def set_current_user
    auth_header = request.headers['Authorization']
    return if auth_header.nil?

    token = auth_header.split(' ')[1]
    return head :unauthorized if token.nil?

    begin
      decoded_token = JWT.decode(token, Rails.application.credentials.devise[:jwt_secret_key], true, { algorithm: 'HS512' })
      @current_user = User.find_by(email: decoded_token[0]['sub'])
    rescue JWT::DecodeError
      head :unauthorized
    end
  end


end


# removed for testing

# class ApplicationController < ActionController::API
#   before_action :authenticate_user!
#   before_action :configure_permitted_parameters, if: :devise_controller?
#
#   def check_organisation_role
#     # TODO: write logic after role implementation
#     true
#   end
#
#   protected
#
#   def configure_permitted_parameters
#     devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name])
#   end
#
# end

