class MessagesController < ApplicationController
  def index
    @messages = Message.where(group_id:params[:group_id])
    @messages = @messages.order(created_at: :desc)
    render json:@messages
  end

  def create
    @message = Message.new(message_params)
    group = Group.find( params[:group_id] )
    contacts = group.users
    sender = User.find( group.owner_id )

    puts "#"*200
    p @contacts
    puts "#"*200


    @message.sender_id = current_user.id
    @message.group_id = params[:group_id]
    @message.save

    ModelMailer.new_record_notification(@message, contacts, sender).deliver

    render json:@message
  end

  private
  def message_params
    params.require(:message).permit(
      :subject,
      :body,
    )
  end
end
