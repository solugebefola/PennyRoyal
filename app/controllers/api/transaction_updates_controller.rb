class Api::TransactionUpdatesController < ApplicationController
  def index
    current_user.generate_transactions(3)
  end
end
