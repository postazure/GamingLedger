class ModelMailer < ActionMailer::Base
  default from: "GM@GamingLedger.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.model_mailer.new_record_notification.subject
  #
  def new_record_notification(message_info, contacts)
    @message_info = message_info
    contacts.each do |contact|
      @reciever = contact.email
      mail(to: "gordonmaxc@gmail.com", subject: @message_info.subject)
    end
  end
end
