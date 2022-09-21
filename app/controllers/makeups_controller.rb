class MakeupsController < ApplicationController
    skip_before_action :authenticate_user
    #GET '/makeups'
    def index
        render json: Makeup.all, status: :ok
    end

    #POST '/makeups'
    # def create
    #     makeups = Makeup.create!(makeup_params)
    #     render json: makeups, status: :created
    # end

    #GET '/makeups/:id'
    def show
        render json: makeup_id, status: :ok
    end


    private
    def makeup_params
        params.permit(:name,:product_type,:category,:brand,:currency,:price,:description,:image)
    end

    def makeup_id
        Makeup.find(params[:id])
    end

end
