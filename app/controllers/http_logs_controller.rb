# frozen_string_literal: true
require 'csv'

class HttpLogsController < ApplicationController
  include RoleCheck
  include PaginationAndSorting
  include ResponseHeaders
  # Only Super Admin can perform create, update, and destroy action
  before_action -> { check_role_permissions('ROLE_ADMIN') }, only: %i[update destroy create]
  before_action :set_http_log, only: %i[show update destroy]

  def index
    query = params[:query]
    q = params[:q] || {}
    @http_logs = if current_user_has_role?('ROLE_ADMIN')
                   HttpLog.ransack(q).result
                 else
                   q_with_organisation_id = q.merge(application_organisation_id_eq: @current_user.organisation_id)
                   HttpLog.joins(:application).ransack(q_with_organisation_id).result
                 end

    @http_logs = if query.present?
                   HttpLog.search(query).results
                 else
                   apply_pagination_and_sorting(@http_logs, query)
                 end

    add_total_count_header do
      render json: @http_logs, status: :ok
    end
  end

  def show
    if current_user_has_role?('ROLE_ADMIN')
      render json: @http_log
    elsif @http_log.application.organisation_id == @current_user.organisation_id
      render json: @http_log
    end
  end

  def create
    @http_log = HttpLog.new(http_log_params)
    if @http_log.save
      render json: @http_log, status: :created, location: @http_log
    else
      render json: @http_log.errors, status: :unprocessable_entity
    end
  end

  def update
    if @http_log.update(http_log_params)
      render json: @http_log, status: :ok, location: @http_log
    else
      render json: @http_log.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @http_log.destroy
    head :no_content
  end

  def export_csv
    # Fetch the logs based on the filters
    # q = params[:q] || {}
    # q_with_organisation_id = q.merge(application_organisation_id_eq: @current_user.organisation_id)
    @http_logs = HttpLog.all

    # Generate the CSV content
    csv_content = generate_csv(@http_logs)

    # Set the response headers and return the CSV content
    send_data csv_content, filename: "http_logs_#{Time.zone.now.to_date}.csv", type: "text/csv"
  end

  private

  def generate_csv(http_logs)
    CSV.generate(headers: true) do |csv|
      # Define the CSV headers
      csv << %w[id request_timestamp http_method request_url http_status_code remote_ip_address duration]

      # Iterate through the logs and add each row to the CSV
      http_logs.each do |log|
        csv << [log.id, log.request_timestamp, log.http_method, log.request_url, log.http_status_code, log.remote_ip_address, log.duration]
      end
    end
  end

  def set_http_log
    @http_log = HttpLog.find(params[:id])
  end

  def http_log_params
    params.require(:http_log).permit(:request_timestamp, :http_method, :request_url, :http_status_code,
                                     :remote_ip_address, :duration, :request_headers, :response_headers, :request_url_parameters, :request_body, :request_cookies, :response_cookies, :application_id)
  end
end
