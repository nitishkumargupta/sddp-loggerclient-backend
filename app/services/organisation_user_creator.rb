class OrganisationUserCreator
  attr_accessor :organisation, :user_params, :user

  def initialize(organisation, user_params, user = nil)
    @organisation = organisation
    @user_params = user_params
    @user = user
  end

  def create_admin_user
    organisation.users.build(first_name: organisation.name, email: organisation.email, password: user_params["password"])
  end

  def update_password
    user.update(password: user_params["password"])
  end
end