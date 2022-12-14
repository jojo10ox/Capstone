Rails.application.routes.draw do

  get 'sessions/create'
  get 'sessions/destroy'

  get '/me', to: "users#show"
  post "/login", to: "sessions#create"
  get '/signup', to: "users#create"
  delete "/logout", to: "sessions#destroy"

  get '/all_makeup', to: "makeups#from_api"
  post 'first_review', to: 'reviews#first_review'
  
  resources :reviews
  resources :users
  resources :makeups
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
