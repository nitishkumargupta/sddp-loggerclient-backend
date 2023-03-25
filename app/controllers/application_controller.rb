class ApplicationController < ActionController::API
  before_action :authenticate_user!
  
  def check_organisation_role
    # TODO: write logic after role implementation
    true
  end
end
