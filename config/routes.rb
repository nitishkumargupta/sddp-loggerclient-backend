Rails.application.routes.draw do
  resources :organisations
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  mount ApplicationServerManagement::Engine => "/api"
  # devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  scope '/api' do
    post 'authenticate', to: 'authentication#authenticate'
    get 'member-data', to: 'members#show'
    post 'register', to: 'users/registrations#new'
  end

  devise_for :users,
             controllers: {
                 sessions: 'users/sessions',
                 registrations: 'users/registrations'
             }
  get '/member-data', to: 'members#show'
  # post '/api/register', to: 'users/registrations#new'
end
