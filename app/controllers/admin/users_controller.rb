class Admin::UsersController < ApplicationController
  include RoleCheck
  include PaginationAndSorting
  include ResponseHeaders

  before_action :set_user, only: [:show, :update, :destroy]

  def index
    check_role_permissions(%w[ROLE_ADMIN ROLE_ORGANIZATION_ADMIN])
    query = params[:query]
    q = params[:q]

    if current_user_has_role?('ROLE_ADMIN')
      @users = User.ransack(q).result
    elsif current_user_has_role?('ROLE_ORGANIZATION_ADMIN')
      @users = User.where(organisation_id: @current_user.organisation_id)
    end

    @users = apply_pagination_and_sorting(@users, query)

    add_total_count_header do
      render json: @users, status: :ok
    end
  end

  def show
    render json: @user
  end

  def create
    current_user_has_role?('ROLE_ADMIN')
    @user = User.new(user_params.except(:authorities))

    if @user.save
      if user_params[:authorities].present?
        update_user_authorities(@user, params[:authorities])
      end
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end


  def update
    current_user_has_role?('ROLE_ADMIN')

    if @user.update(user_params.except(:authorities))
      update_user_authorities(@user, params[:authorities])
      render json: @user, status: :ok
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    current_user_has_role?('ROLE_ADMIN')
    @user.destroy

    head :no_content
  end

  private

  def set_user
    @user = User.find(params[:id])
  end


  def user_params
    params.require(:user).permit(:email, :first_name, :last_name, :password, :organisation_id, authorities: [])
    params.require(:user).permit(:email, :first_name, :last_name, :password, authorities: [])
  end

  def update_user_authorities(user, authorities)
    user.authorities.clear
    if authorities
      authorities.each do |authority_name|
        authority = Authority.find_by(name: authority_name)
        user.authorities << authority if authority
      end
    end
  end

end
