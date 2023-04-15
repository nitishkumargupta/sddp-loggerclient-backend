class ChartsController < ApplicationController

  # Returns the total number of HttpLogs in the last 24 hours, 7 days, and 30 days and all
  def http_logs_by_timeframe
    now = Time.now
    render json: {
      total: HttpLog.count,
      last_24_hours: HttpLog.where("request_timestamp >= ?", now - 24.hours).count,
      last_7_days: HttpLog.where("request_timestamp >= ?", now - 7.days).count,
      last_30_days: HttpLog.where("request_timestamp >= ?", now - 30.days).count
    }
  end

  # Returns the distribution of HttpLogs by HttpMethod (GET, POST, PUT, DELETE, HEAD, OPTIONS, CONNECT, TRACE, PATCH)
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
end
