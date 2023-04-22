class UserMailer < ApplicationMailer
  def send_password_reset_mail(user)
    @user = user
    mail(to: @user.email, subject: 'Password Reset Instructions')
  end
  
  def send_alert_mailer(application, payload)
    @application = application
    @payload = payload
    @alert_subscribers = Subscription.where(application_id: application.id).map{|a| a.alert_subscriber}
    @alert_subscribers.each do |subscriber|
      mail(to: subscriber.email, subject: "Alert from your application #{application.code}")
    end
  end

  def send_mail_to_dev(payload, error)
    @payload = payload
    @error = error
    mail(to: ['guptanitish888@gmail.com', 'osamaeshmilh@gmail.com'], subject: 'Alert! An error ocured while inserting Http log')
  end
end
