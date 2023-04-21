# app/controllers/account_controller.rb
class AccountController < ApplicationController
  skip_before_action :set_current_user, only: [:register]

  def register
    email = params[:email]
    password = params[:password]
    org_name = params[:orgName]
    org_address = params[:orgAddress]
    org_code = params[:orgCode]

    # Check if the email is already in use
    if User.exists?(email: email)
      render json: { error: 'Email already in use' }, status: :bad_request
      return
    end

    # Create the new organisation or find an existing one
    organisation = Organisation.find_or_create_by(name: org_name, address: org_address, code: org_code, email: email)

    # Create the new user
    user = User.new(email: email, password: password, first_name: organisation.name, organisation: organisation)

    # Assign the default authority to the user
    role_user = Authority.find_by(name: 'ROLE_USER')
    user.authorities << role_user if role_user

    role_org_admin = Authority.find_by(name: 'ROLE_ORGANIZATION_ADMIN')
    user.authorities << role_org_admin if role_org_admin

    if user.save
      render json: { message: 'User registration successful' }, status: :created
    else
      render json: { error: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def get_account
    if @current_user
      user_data = @current_user.as_json(
        only: [:id, :email, :created_at, :updated_at, :first_name, :last_name],
        include: {
          authorities: { only: [:name] }
        }
      )

      # Extract the 'name' from each authority and replace the authorities array with their names
      if @current_user.authorities.present?
        user_data["authorities"] = @current_user.authorities.map { |authority| authority["name"] }
      end

      render json: user_data, status: :ok
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end

  def save_account
    user_login = current_user.email # Assuming `current_user` returns the authenticated user
    raise 'Current user login not found' if user_login.nil?

    existing_user = User.find_by('lower(email) = ?', user_login.downcase)
    if existing_user.present? && existing_user.email.downcase != user_login.downcase
      render json: { error: 'Email already used' }, status: :bad_request
      return
    end

    user = User.find_by(email: user_login)
    unless user.present?
      render json: { error: 'User could not be found' }, status: :internal_server_error
      return
    end

    user.update!(
      first_name: params[:first_name],
      last_name: params[:last_name],
    )

    head :ok
  end

  def request_password_reset
    user = User.find_by(email: params[:email])

    if user
      user.send_reset_password_instructions
      UserMailer.send_password_reset_mail(user).deliver_now
    else
      Rails.logger.warn("Password reset requested for non-existing email")
    end

    head :ok
  end

  def finish_password_reset
    key_and_password = params.permit(:reset_password_token, :new_password)

    unless key_and_password[:new_password].length.between?(8, 128)
      render json: { error: 'Invalid password length' }, status: :bad_request
      return
    end

    user = User.with_reset_password_token(key_and_password[:reset_password_token])

    if user
      user.password = key_and_password[:new_password]
      if user.save
        head :ok
      else
        render json: { error: 'Error updating password' }, status: :internal_server_error
      end
    else
      render json: { error: 'No user was found for this reset key' }, status: :unprocessable_entity
    end
  end

  def change_password
    user = current_user

    unless user&.valid_password?(params[:current_password])
      render json: { error: 'Invalid current password' }, status: :unprocessable_entity
      return
    end

    user.password = params[:new_password]

    if user.save
      render json: { message: 'Password changed successfully' }, status: :ok
    else
      render json: { error: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

end


