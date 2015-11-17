class AccountsController < ApplicationController

  def index
    @accounts = current_user.accounts.includes(:institutions)

    render :json @accounts
  end
end
