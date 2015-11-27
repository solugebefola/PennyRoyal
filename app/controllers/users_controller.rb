class UsersController < ApplicationController

  def new
    @user = User.new
    render :new
  end

  def show
    @user = User.find(params[:id])
    @accounts = @user.accounts
    render :show
  end

  def create
    @user = User.new
    if (params[:user][:password] == params[:password_confirm] &&
      params[:user][:email] == params[:email_confirm])
      @user.password=(params[:user][:password])
      @user = User.create(user_params)
      if @user.save
        log_in(@user)

        redirect_to root_url
      else
        flash.now[:errors] = ["Invalid email or password"]
        render :new
      end
    elsif (params[:user][:email] != params[:email_confirm])
      puts params
      flash.now[:errors] = ["Email and email confirm do not match"]
      render :new
    else
      flash.now[:errors] = ["Password and password confirm do not match"]
      render :new
    end
  end

  def update
    @user = User.find(params[:id])
    @user.update!(user_params)
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy!
  end

  private
    def user_params
      params.require(:user).permit(:email, :password, :password_digest, :profile)
    end
end
