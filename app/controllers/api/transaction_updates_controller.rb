class Api::TransactionUpdatesController < ApplicationController
  def index
    current_user.generate_transactions(5)
  end
end
