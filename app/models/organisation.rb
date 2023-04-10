class Organisation < ApplicationRecord
  has_many :application_servers, class_name: "ApplicationServerManagement::ApplicationServer"
  has_many :users

  def user_count
    users.count
  end

  def self.ransackable_attributes(auth_object = nil)
    %w[id name code address email created_at updated_at]
  end
end
