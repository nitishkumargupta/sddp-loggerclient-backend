Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  mount ApplicationServerManagement::Engine => "/api"

  scope '/api' do
    post 'authenticate', to: 'authentication#authenticate'
    get 'member-data', to: 'members#show'
    post 'account/register', to: 'account#register'

    get 'account', to: 'account#get_account'
    post 'account', to: 'account#save_account'
    post 'account/reset-password/init', to: 'account#request_password_reset'
    post 'account/reset-password/finish', to: 'account#finish_password_reset'
    post 'account/change-password', to: 'account#change_password'

    get 'authorities', to: 'authorities#index'

    # Add admin routes
    namespace :admin do
      resources :users, param: :email, only: [:index, :show, :create, :update, :destroy]
    end

    resources :organizations, only: %w(index show create update destroy), controller: 'organisations'
    resources :'http-logs', only: %w(index show create update destroy), controller: 'http_logs', as: 'http_logs'

    get "/alert-subscribers", to: "alert_subscribers#index"
    post "/alert-subscribers", to: "alert_subscribers#create"
    get "/alert-subscribers/:id", to: "alert_subscribers#show"
    patch "/alert-subscribers/:id", to: "alert_subscribers#update"
    put "/alert-subscribers/:id", to: "alert_subscribers#update"
    delete "/alert-subscribers/:id", to: "alert_subscribers#destroy"
  end

  devise_for :users,
             controllers: {
               sessions: 'users/sessions',
               registrations: 'users/registrations'
             }
  get '/member-data', to: 'members#show'
end
