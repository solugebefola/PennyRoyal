class Api::TaglinksController < ApplicationController
  def create
    @taglink = Taglink.create!(taglink_params)
    render :show
  end

  def destroy
    @taglink = Taglink.find(params[:id])
    @taglink.destroy
    render :show
  end

  private
    def taglink_params
      params.require(:taglink).permit(:transaction_id, :tag_id)
    end

end
