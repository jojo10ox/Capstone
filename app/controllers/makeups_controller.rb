class MakeupsController < ApplicationController
    skip_before_action :authenticate_user
    #GET '/makeups'
    # def index
    #     render json: Makeup.all, status: :ok
    # end

    #POST '/makeups'
    # def create
        # makeups = Makeup.create!(makeup_params)
        # render json: makeups, status: :created
    #     response = RestClient.get("https://makeup-api.herokuapp.com/api/v1/products.json")
    #     res = JSON.parse(response)
    #     res.each{|r| Makeup.create(id: r["id"], name: r["name"], category: r["category"], image: r["image_link"], product_type: r["product_type"], product_colors: r["product_colors"], brand: r["brand"], currency: r["currency"], price: r["price"], description: r["description"])}
    # end

    #GET '/makeups/:id'
    def show
        makeup = Makeup.find(params[:id])
        # render json: {reviews: makeup.reviews, makeup_id: makeup.id, user_id: current_user&.id},

        render json: makeup, status: :ok, include: ['reviews', 'reviews.user']
        #, makeup_id: makeup.id, user_id: current_user.id
    end


    #GET '/makeups'
    def index
        makeup = Makeup.all
        render json: makeup, status: :ok
    end

    #GET '/all_makeup'
    def from_api
        response = RestClient.get("https://makeup-api.herokuapp.com/api/v1/products.json")
        render json: response.body

        # if Makeup.any?
        #     return 
        # else 
        #     res = JSON.parse(response)
        #     res.each{|r| Makeup.create(id: r["id"], name: r["name"], category: r["category"], image: r["image_link"], product_type: r["product_type"], product_colors: r["product_colors"], brand: r["brand"], currency: r["currency"], price: r["price"], description: r["description"])}
        # end

    end

    private
    # def makeup_params
    #     params.permit(:name,:product_type,:category,:brand,:currency,:price,:description,:image)
    # end

    def makeup_id
        Makeup.find(params[:id])
    end

end
