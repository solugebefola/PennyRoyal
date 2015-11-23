class Api::AccountBasesController < ApplicationController
  def index
    @institution = Institution.find(params[:id])
    puts @institution
    @account_bases = @institution.account_bases
  end
end
