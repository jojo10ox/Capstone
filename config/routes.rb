Rails.application.routes.draw do

  get 'sessions/create'
  get 'sessions/destroy'

  get '/me', to: "users#show"
  post "/login", to: "sessions#create"
  get '/signup', to: "users#create"
  delete "/logout", to: "sessions#destroy"
  
  resources :reviews
  resources :users
  resources :makeups
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
