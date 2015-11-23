class AccountBasesController < ApplicationController
  def index
    @institution = Institution.find(params[:id])
    @account_bases = @institiution.account_bases
  end
end
