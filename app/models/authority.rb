# app/models/authority.rb
class Authority < ApplicationRecord
  has_many :user_authorities, foreign_key: :authority_name, primary_key: :name
  has_many :users, through: :user_authorities
end
