class SendAlertMailerJob < ApplicationJob
  def perform(application_id, payload)
    application = ApplicationServerManagement::ApplicationServer.find(application_id)

    return unless application.present?
    UserMailer.send_alert_mailer(application,payload).deliver_now
  end
end