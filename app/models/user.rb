class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  # devise :database_authenticatable, :registerable,
  #        :recoverable, :rememberable, :validatable
  devise :database_authenticatable,
         :jwt_authenticatable,
         :registerable,
         :recoverable,
         jwt_revocation_strategy: JwtDenylist

  has_many :user_authorities, dependent: :destroy
  has_many :authorities, through: :user_authorities
  belongs_to :organisation, optional: true

  def as_json(options = {})
    json = super(options)
    json['authorities'] = authorities.pluck(:name)
    json
  end
  def self.ransackable_attributes(auth_object = nil)
    %w[id email encrypted_password reset_password_token reset_password_sent_at remember_created_at
    created_at updated_at first_name last_name organisation_id]
  end
end
