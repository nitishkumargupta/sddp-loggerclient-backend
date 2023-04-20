# This is only for testing purpose to check if login APIs are working fine or not
class MembersController < ApplicationController
  before_action :authenticate_user!

  def show
    render json: { message: "If you see this, you're in!" }
  end
end