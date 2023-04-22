class Subscription < ApplicationRecord
  belongs_to :application_server, class_name: 'ApplicationServerManagement::ApplicationServer', foreign_key: "application_id"
  belongs_to :alert_subscriber
  has_many :alert_events
end
