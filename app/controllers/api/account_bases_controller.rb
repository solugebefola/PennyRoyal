class Api::AccountBasesController < ApplicationController
  def index
    @account_bases = AccountBase.all
  end
end
