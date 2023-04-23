# app/models/http_log.rb
class HttpLog < ApplicationRecord
  searchkick

  belongs_to :application, class_name: 'ApplicationServerManagement::ApplicationServer', foreign_key: 'application_id'

  validates :application, presence: true
  validates :request_timestamp, presence: true
  validates :http_method, presence: true
  validates :request_url, presence: true
  validates :http_status_code, presence: true
  validates :remote_ip_address, presence: true
  validates :duration, presence: true
  validates :request_headers, presence: true
  validates :response_headers, presence: true

  def as_json(options = {})
    super(options.merge(include: { application: { only: [:id, :name, :code] } }))
  end

  def self.ransackable_attributes(auth_object = nil)
    %w[id application_id duration http_method http_status_code id remote_ip_address request_body request_cookies request_headers request_timestamp request_url request_url_parameters response_body response_cookies response_headers]
  end

  def self.ransackable_associations(auth_object = nil)
    ["application"]
  end

end
