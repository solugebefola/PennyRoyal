class SessionsController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      log_in(@user)
      redirect_to user_url(@user)
    else
      render :new
      flash.now[:errors] = @user.errors.full_messages
    end
  end

  def destroy
    log_out
  end

end
