# app/models/alert_event.rb
class AlertEvent < ApplicationRecord
  belongs_to :alert_subscriber

  validates :code, presence: true
  validates :application_code, presence: true
  validates :is_sent, inclusion: { in: [true, false] }
end
