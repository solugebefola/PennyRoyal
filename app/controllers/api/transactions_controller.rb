class Api::TransactionsController < ApplicationController

  def index
    @transactions = Transactions.param_search #Addnote: use scope in model to control this.
  end

  def show
    @transaction = Transaction.find(params[:id])
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
        :notes
      )
    end


end
