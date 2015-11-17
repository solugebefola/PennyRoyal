class Api::AccountsController < ApplicationController

  def index
    @accounts = current_user.accounts
    @institutions = current_user.institutions
  end

  def show
    @account = Account.find(params[:id])
    @institution = @account.institution
  end

  def create
    @account = Account.create!(account_params)
  end

  def update
    @account = Account.find(params[:id])
    @account.update!(account_params)
  end

  def destroy
    @account = Account.find(params[:id])
    @account.destroy!
  end

  private
    def account_params
      params.require(:account).permit(:name, :user_id, :institution_id, :username, :password, :balance, :account_type)
    end

end
