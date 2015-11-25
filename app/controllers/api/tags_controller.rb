class Api::TagsController < ApplicationController

  def create
    @tag = Tag.new(tag_params)
    @tag.user_id = current_user.id
    @tag.save
    @taglink = @tag.taglinks.new()
    @taglink.transaction_id = params[:tag][:transaction_id]
    @taglink.save
    render :show
  end

  def destroy
    @tag = Tag.find(params[:id])
    @tag.destroy
    render :index
  end

  def show
    @tag = current_user.find(params[:id])
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
