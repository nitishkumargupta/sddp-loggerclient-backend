class SendMailToDevJob < ApplicationJob
  def perform(payload, error)
    UserMailer.send_mail_to_dev(payload,error).deliver_now
  end
end