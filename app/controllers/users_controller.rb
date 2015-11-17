class UsersController < ApplicationController

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new
    @user.create_password(params[:password])
    if @user.save
      log_in(@user)

      redirect_to institutions_url
    else
      render :new
    end
  end

  def update
    @user = User.find(params[:id])
    @user.update!(user_params)
  end

  private
    def user_params
      params.require(:user).permit(:email, :password)
    end
end
