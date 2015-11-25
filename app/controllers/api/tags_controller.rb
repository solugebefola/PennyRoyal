class Api::TagsController < ApplicationController

  def create
    @tag = Tag.new(tag_params)
    @tag.taglinks.create!(params[:transaction_id])
    @tag.user_id = current_user.id
    if @tag.save
      render :show
    else
      render :json {}
    end
  end

  def index
    @tags = current_user.tags
    render :index
  end

  def edit
    
  end

  private
    def tag_params
      params.require(:tag).permit(:name)
    end

end
