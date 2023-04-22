class SendAlertMailerJob < ApplicationJob
  def perform(application_id, payload)
    application = ApplicationServerManagement::ApplicationServer.find(application_id)

    return unless application.present?

    subscriptions = Subscription.where(application_id: application_id)
    subscriptions.each do |subscription|
      AlertEvent.create(code: payload["http_status_code"], application_code: application.code, subscription_id:subscription.id, is_sent: true, alert_subscriber_id: subscription.alert_subscriber_id)
    end
    UserMailer.send_alert_mailer(application,payload).deliver_now
  end
end