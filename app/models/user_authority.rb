# app/models/user_authority.rb
class UserAuthority < ApplicationRecord
  belongs_to :user
  belongs_to :authority, foreign_key: :authority_name, primary_key: :name
end