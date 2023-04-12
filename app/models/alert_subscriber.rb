# app/models/alert_subscriber.rb
class AlertSubscriber < ApplicationRecord
  has_many :alert_events
  has_many :subscriptions
  has_many :application_servers, through: "subscriptions"
  belongs_to :organisation

  validates :name, presence: true
  validates :email, presence: true, format: { with: /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i }

  def self.ransackable_attributes(auth_object = nil)
    %w[id name email created_at updated_at organisation_id]
  end

  def self.ransackable_associations(auth_object = nil)
    ["alert_events", "application_servers", "organisation", "subscriptions"]
  end
end
