class Api::TagsController < ApplicationController

  def create
    @tag = current_user.tags(newtag_params)
    @tag.taglinks.create!(params[:transaction_id])
    if @tag.save
      render :show
    else
      render :json {}
    end
  end

  def destroy
    @tag = Tag.find(params[:id])
    @tag.destroy
    render :index
  end

  def index
    @tags = current_user.tags.includes(:taglinks)
    render :index
  end

  private
    def tag_params
      params.require(:tag).permit(:name)
    end

end
