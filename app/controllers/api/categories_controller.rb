class Api::CategoriesController < ApplicationController

  def index
    @categories = Category.all
  end

  def show
    @category = Category.find(params[:id])
  end

  def update
    @category = Category.find(params[:id])
    @category.update!
    render :show
  end

  def create
    @category = Category.create!(category_params)
    @categories = Category.all
    render :index
  end

  def destroy
    @category = Category.find(params[:id])
    @category.destroy
    render :index
  end

  private
    def category_params
      params.require(:category).permit(:category_id, :name)
    end
end
