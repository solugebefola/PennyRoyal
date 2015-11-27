class Api::UsersController < ApplicationController
  def show
    @user = current_user
  end

  def index
    @user = current_user
  end

  def update
    current_user.update!(user_params)
    render :show
  end

  private
    def user_params
      params.require(:user).permit(:fname, :lname, :age, :gender, :email, :profile)
    end
end
