class AuthenticationController < ApplicationController
  skip_before_action :authenticate_user

  def create
    user = User.find_by_email(params[:email])

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to main_path
    else
      flash[:alert] = "Username/Password is invalid"
      render :new
    end
  end

  def destroy
    session.clear
    redirect_to root_path
  end
end
