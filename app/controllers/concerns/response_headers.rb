module ResponseHeaders
  extend ActiveSupport::Concern

  included do
    after_action :set_custom_headers, only: [:create, :update, :destroy]
  end

  def set_custom_headers_for_action(alert: nil, params: nil)
    alert ||= "#{controller_name} #{action_name} "
    params ||= instance_variable_get("@#{controller_name.singularize}").id.to_s if instance_variable_get("@#{controller_name.singularize}").present?

    response.headers['X-sddpLoggerFrontendApp-alert'] = "#{alert} #{params}".strip
    response.headers['X-sddpLoggerFrontendApp-params'] = params if params.present?
  end

  private

  def set_custom_headers
    set_custom_headers_for_action
  end
end
