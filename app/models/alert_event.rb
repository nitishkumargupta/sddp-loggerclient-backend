# app/models/alert_event.rb
class AlertEvent < ApplicationRecord
  belongs_to :subscription
  belongs_to :alert_subscriber

  validates :code, presence: true
  validates :application_code, presence: true
  validates :is_sent, inclusion: { in: [true, false] }

  def self.ransackable_attributes(auth_object = nil)
    %w[id code application_code is_sent alert_subscriber_id]
  end

end
