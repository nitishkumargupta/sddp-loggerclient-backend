class Organisation < ApplicationRecord
  has_many :application_servers, class_name: "ApplicationServerManagement::ApplicationServer"
  has_many :users
end
