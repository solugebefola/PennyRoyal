class Api::UsersController < ApplicationController
  def show
    current_user
  end

  def update
    current_user.update!(user_params)
  end

  private
    def user_params
      params.require(:user).permit(:fname, :lname, :age, :gender, :email, :profile)
    end
end
