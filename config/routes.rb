Rails.application.routes.draw do

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  devise_for :users
  get '/dashboard' => 'users#dashboard', as: :user_root
  namespace :user do
    root 'users#dashboard' # creates user_root_path
  end

  root 'static_pages#bienvenidos'
  
  resources :users do
    
  end

  resources :categories do
    resources :products
  end


  get '/dashboard', to: 'users#dashboard'
  get '/:id', to: 'users#show_products', as: :show_products
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
