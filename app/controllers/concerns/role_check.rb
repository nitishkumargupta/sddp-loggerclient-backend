# app/controllers/concerns/role_check.rb
module RoleCheck
  extend ActiveSupport::Concern

  private

  def check_role_permissions(roles)
    unless roles.any? { |role| current_user_has_role?(role) }
      raise RoleCheckError
    end
  end

  def current_user_has_role?(role)
    @current_user.authorities.exists?(name: role)
  end
end
