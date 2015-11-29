class Api::TransactionsController < ApplicationController

  def index
    @page_number = params[:page] || 1
    @per_number = params[:per] || 25
    @transactions = current_user
      .transactions
      .includes(:tags)
      .order(date: :desc)
      .page(@page_number)
    @total_count = current_user
      .transactions
      .order(date: :desc)
      .page(@page_number)
      .per(@per_number)
      .total_count
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
