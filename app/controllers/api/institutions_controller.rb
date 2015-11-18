class Api::InstitutionsController < ApplicationController

  def index
    @institutions = Institution.all
  end

  def new
    @institution = Institution.new
  end

  def create
    @institution = Institution.create(institution_params)
    if @institution.save
      redirect_to api_institution_url(@institution)
    else
      flash.now[:errors] = ["Invalid name or url"]
      render :new
    end
  end

  def destroy
    @institution = Institution.find(params[:id])
    @institution.destroy!
  end

  def update
    @institution = Institution.find(params[:id])
    @institution.update!(institution_params)
  end

    def institution_params
      params.require(:institution).permit(:name, :url, :image_url)
    end

end
