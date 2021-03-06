class Api::TransactionsController < ApplicationController

  def index
    @transactions = current_user.transactions.order(date: :desc)
  end

  def show
    @transaction = Transaction.includes(:tags).find(params[:id])
  end

  def create
    @transaction = Transaction.create(transaction_params)
    if @transaction.save
      render :show
    else
      flash.now[:errors] = ["Error saving :("]
      redirect_to root_url
    end
  end

  def update
    @transaction = Transaction.find(params[:id])
    params[:transaction][:tag_ids] ||= []
    @transaction.update(transaction_params)
    render :show
  end

  def destroy
    @transaction = Transaction.find(params[:id])
    @transaction.destroy!
    render :index
  end

  private
    def transaction_params
      params.require(:transaction).permit(
        :account_id,
        :category_id,
        :date,
        :amount,
        :description,
        :notes,
        tag_ids: []
      )
    end


end
