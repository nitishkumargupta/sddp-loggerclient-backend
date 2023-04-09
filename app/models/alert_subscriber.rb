# app/models/alert_subscriber.rb
class AlertSubscriber < ApplicationRecord
  has_many :alert_events
  has_and_belongs_to_many :applications, join_table: 'rel_alert_subscriber__applications'

  validates :name, presence: true
  validates :email, presence: true, format: { with: /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i }
end
