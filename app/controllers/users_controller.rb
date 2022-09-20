class UsersController < ApplicationController
    skip_before_action :authenticate_user, only: :create
    #GET '/userss'
    def index 
        render json: User.all, status: :ok
    end

    #GET '/users/:id'
    def show 
        if current_user
            render json: current_user, status: :ok
          else
            render json: "No current session stored", status: :unauthorized
          end
    end

    def create
        user = User.create(user_params)
        if user.valid?
          session[:user_id] = user.id # this is the piece that logs a user in and keeps track of users info in subsequent requests.
          render json: user, status: :ok
        else
          render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end

    private 

    def user_params
        params.permit(:username, :password, :admin)
    end
end
