# app/controllers/admin/users_controller.rb
class Admin::UsersController < ApplicationController

  def index
    page = params[:page] || 1
    size = params[:size] || 20
    sort = params[:sort] || 'id,asc'

    sort_column, sort_direction = sort.split(',')

    users = User.order("#{sort_column} #{sort_direction}").paginate(page: page, per_page: size)

    render json: users, status: :ok
  end

  def show
    user = User.find_by(email: params[:email])
    if user
      render json: user, status: :ok
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user, status: :created
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  def update
    user = User.find_by(email: params[:email])
    if user&.update(user_params)
      render json: user, status: :ok
    else
      render json: user&.errors || { error: "User not found" }, status: :unprocessable_entity
    end
  end

  def destroy
    user = User.find_by(email: params[:email])
    if user&.destroy
      render json: { message: "User deleted" }, status: :ok
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :first_name, :last_name, :password)
  end
end
