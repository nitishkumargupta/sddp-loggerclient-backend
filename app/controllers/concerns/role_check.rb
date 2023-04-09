# app/controllers/concerns/role_check.rb
module RoleCheck
  extend ActiveSupport::Concern

  private

  def check_role_permissions(roles)
    unless roles.any? { |role| current_user_has_role?(role) }
      render json: { error: "You don't have permission to perform this action" }, status: :forbidden
    end
  end

  def current_user_has_role?(role)
    @current_user.authorities.exists?(name: role)
  end
end
