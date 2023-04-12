class Organisation < ApplicationRecord
  has_many :application_servers, class_name: "ApplicationServerManagement::ApplicationServer"
  has_many :users
  has_many :alert_subscribers

  def user_count
    users.count
  end

  def applications_count # Add this method
    application_servers.count
  end

  def self.ransackable_attributes(auth_object = nil)
    %w[id name code address email created_at updated_at]
  end
end
