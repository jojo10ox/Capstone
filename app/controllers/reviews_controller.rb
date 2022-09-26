class ReviewsController < ApplicationController
    skip_before_action :authenticate_user

    #GET '/reviews'
    def index
        render json: Review.all, status: :ok
    end

    #POST '/reviews'
    def create
        # byebug
        # reviews = Review.create!(review_params)
        # render json: reviews, status: :created
        user = current_user
        makeup= Makeup.find_or_create_by(makeup_params)
      
        review = Review.new(review_params)
        review.user_id = user.id
        review.makeup_id = makeup.id
        # byebug
        review.save
        render json: review, status: :created    

        # byebug
        # review_user_id = user.id
        # review_makeup_id = makeup.id
        # new_review = Review.new(review_params)
        # new_review.save
    end

    #GET '/reviews/:id'
    def show
        render json: review_id, status: :ok
    end

    #PATCH '/reviews/:id'
    def update 
        reviews = review_id
        reviews.update!(review_params)
        render json: reviews, status: :accepted
    end

    #DELETE '/reviews/:id'
    def destroy
        reviews = review_id
        reviews.destroy
        head :no_content
    end

    private
    def review_params
        params.permit( 
            :user_id,
            :makeup_id, 
            :rating, 
            :description_title, 
            :review_description, 
            :state
        )
        #:user_id, :makeup_id
    end

    def makeup_params
     
        params.permit(
            :name,
            :price,
            :currency,
            :image_link, 
            :description, 
            :category, 
            :product_type, 
            :brand
        )
    end

    def review_id
        Review.find(params[:id])
    end

end
