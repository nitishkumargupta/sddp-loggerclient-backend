Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  mount ApplicationServerManagement::Engine => "/api"

  scope '/api' do
    post 'authenticate', to: 'authentication#authenticate'
    get 'member-data', to: 'members#show'
    post 'register', to: 'users/registrations#new'

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

    resources :organisations, only: %w(show create update)
  end


  devise_for :users,
             controllers: {
               sessions: 'users/sessions',
               registrations: 'users/registrations'
             }
  get '/member-data', to: 'members#show'
end
