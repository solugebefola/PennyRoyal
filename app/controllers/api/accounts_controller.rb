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
    @account = current_user.accounts.create!(account_params)
    @institution = @account.institution
    render :show
  end

  def update
    @account = Account.find(params[:id])
    @account.update!(account_params)
    render :show
  end

  def destroy
    @account = Account.find(params[:id])
    @account.destroy!
    @accounts = current_user.accounts
    render :index
  end

  private
    def account_params
      params.require(:account).permit(:name, :user_id, :institution_id, :username, :user_password, :balance, :account_type)
    end

end
