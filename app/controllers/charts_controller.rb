class ChartsController < ApplicationController
  include RoleCheck

  # TODO :: make it not public
  #
  # Returns the total number of HttpLogs in the last 24 hours, 7 days, and 30 days and all
  def http_logs_by_timeframe
    now = Time.now
    logs_scope = HttpLog.all

    # if current_user_has_role?('ROLE_ORGANIZATION_ADMIN')
    #   logs_scope = logs_scope.joins(:application).where(applications: { organisation_id: @current_user.organisation_id })
    # end

    render json: {
      total: logs_scope.count,
      last_24_hours: logs_scope.where("request_timestamp >= ?", now - 24.hours).count,
      last_7_days: logs_scope.where("request_timestamp >= ?", now - 7.days).count,
      last_30_days: logs_scope.where("request_timestamp >= ?", now - 30.days).count
    }
  end


  # Returns the distribution of HttpLogs by HttpMethod (GET, POST, PUT, DELETE, HEAD, OPTIONS, CONNECT, TRACE, PATCH) - Pie chart
  def http_logs_by_method
    method_counts = HttpLog.group(:http_method).count
    render json: method_counts
  end

  # Returns the number of HttpLogs for each application as a bar chart
  def http_logs_by_application
    app_counts = HttpLog.joins(:application).group("application_server_management_application_servers.name").count
    render json: app_counts
  end

  # Returns the number of HttpLogs for each organization as a bar chart
  def http_logs_by_organization
    org_counts = HttpLog.joins(application: :organisation).group("organisations.name").count
    render json: org_counts
  end

  # Returns the distribution of HttpLogs by HTTP status code categories (1xx, 2xx, 3xx, 4xx, 5xx) as a pie chart
  def http_logs_by_status_code
    status_code_counts = HttpLog.group("FLOOR(http_status_code / 100)").count
    render json: status_code_counts
  end

  # Returns the number of AlertEvents sent over time as a line chart
  def alert_events_over_time
    event_counts = AlertEvent.select("DATE(created_at) as date, COUNT(*) as count")
                             .group("DATE(created_at)")
                             .order("date ASC")
                             .map { |r| [r.date, r.count] }
                             .to_h
    render json: event_counts
  end

  # Returns the distribution of AlertEvents by Application as a pie chart
  def alert_events_by_application
    app_counts = AlertEvent.group("application_code").count
    render json: app_counts
  end

  # Returns the top N slowest requests with HttpMethod, request URL, duration, and timestamp
  def top_ten_slowest_requests
    slowest_requests = HttpLog
                         .select("http_method, request_url, duration, request_timestamp, application_id")
                         .order(duration: :desc)
                         .limit(10)

    render json: slowest_requests
  end


end
