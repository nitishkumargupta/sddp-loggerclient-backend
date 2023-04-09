# app/models/http_log.rb
class HttpLog < ApplicationRecord
  belongs_to :application, class_name: 'ApplicationServerManagement::ApplicationServer', foreign_key: 'application_id'

  validates :request_timestamp, presence: true
  validates :http_method, presence: true
  validates :request_url, presence: true
  validates :http_status_code, presence: true
  validates :remote_ip_address, presence: true
  validates :duration, presence: true
  validates :request_headers, presence: true
  validates :response_headers, presence: true
end