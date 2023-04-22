# frozen_string_literal: true

class HttpLogsController < ApplicationController
  include RoleCheck
  include PaginationAndSorting
  include ResponseHeaders
  # Only Super Admin can perform create, update, and destroy action
  before_action -> { check_role_permissions('ROLE_ADMIN') }, only: %i[update destroy create]
  before_action :set_http_log, only: %i[show update destroy]

  def index
    query = params[:query]
    q = params[:q]
    @http_logs = if current_user_has_role?('ROLE_ADMIN')
                   HttpLog.ransack(q).result
                 else
                   HttpLog.joins(:application).where(application: { organisation_id: @current_user.organisation_id })
                 end

    @http_logs = if query.present?
                   # TODO: : fix paging
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

  private

  def set_http_log
    @http_log = HttpLog.find(params[:id])
  end

  def http_log_params
    params.require(:http_log).permit(:request_timestamp, :http_method, :request_url, :http_status_code,
                                     :remote_ip_address, :duration, :request_headers, :response_headers, :request_url_parameters, :request_body, :request_cookies, :response_cookies, :application_id)
  end
end
