class WelcomeController < ApplicationController

  # Allow access to pages in this controller without authenticating user first.
  skip_before_action :authenticate_user

  def index

  end

  def test
    ModelMailer.new_record_notification.deliver
  end
end
