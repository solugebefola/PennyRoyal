class Api::PaginatedTransactionsController < ApplicationController
  def index
    @page = params[:page] || 1
    @per = params[:per] || 25
    @transactions = current_user
      .transactions
      .includes(:tags)
      .order(date: :desc)
      .page(@page)
    @total_count = current_user
      .transactions
      .page(@page)
      .per(@per)
      .total_count
  end
end
