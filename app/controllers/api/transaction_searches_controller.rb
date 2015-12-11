class Api::TransactionSearchesController < ApplicationController

  def index
    @transactions = Transaction.transaction_search(params[:search_text])
  end
end
