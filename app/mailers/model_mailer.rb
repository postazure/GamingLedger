class ModelMailer < ActionMailer::Base
  default from: "GameLedger@GamingLedger.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.model_mailer.new_record_notification.subject
  #
  def new_record_notification(message_info, contacts, sender)
    @message_info = message_info
    @sender = sender.email
    contacts.each do |contact|
      @reciever = contact.email
      mail(to: @reciever, subject: @message_info.subject) unless @reciever == @sender
    end
  end
end
