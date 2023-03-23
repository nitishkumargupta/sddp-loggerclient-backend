# app/controllers/authorities_controller.rb
class AuthoritiesController < ApplicationController
  def index
    authorities = Authority.all
    render json: authorities.map(&:name), status: :ok
  end
end
