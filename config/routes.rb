require 'sidekiq/web'
Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  mount ApplicationServerManagement::Engine => "/api"
  mount Sidekiq::Web => "/sidekiq"

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
      resources :users, only: [:index, :show, :create, :update, :destroy]
    end

    resources :organizations, only: %w(index show create update destroy), controller: 'organisations'
    resources :'http-logs', only: %w(index show create update destroy), controller: 'http_logs', as: 'http_logs'

    get 'charts/http_logs_by_timeframe', to: 'charts#http_logs_by_timeframe'
    get 'charts/http_logs_by_method', to: 'charts#http_logs_by_method'
    get 'charts/http_logs_by_application', to: 'charts#http_logs_by_application'
    get 'charts/http_logs_by_organization', to: 'charts#http_logs_by_organization'
    get 'charts/http_logs_by_status_code', to: 'charts#http_logs_by_status_code'
    get '/charts/alert_events_over_time', to: 'charts#alert_events_over_time'
    get '/charts/alert_events_by_application', to: 'charts#alert_events_by_application'
    get '/charts/top_ten_slowest_requests', to: 'charts#top_ten_slowest_requests'


    get "/alert-subscribers", to: "alert_subscribers#index"
    post "/alert-subscribers", to: "alert_subscribers#create"
    get "/alert-subscribers/:id", to: "alert_subscribers#show"
    patch "/alert-subscribers/:id", to: "alert_subscribers#update"
    put "/alert-subscribers/:id", to: "alert_subscribers#update"
    delete "/alert-subscribers/:id", to: "alert_subscribers#destroy"
    get "/alert-events", to: "alert_events#index"
    post "/alert-events", to: "alert_events#create"
    get "/alert-events/:id", to: "alert_events#show"
    patch "/alert-events/:id", to: "alert_events#update"
    put "/alert-events/:id", to: "alert_events#update"
    delete "/alert-events/:id", to: "alert_events#destroy"
  end

  devise_for :users,
             controllers: {
               sessions: 'users/sessions',
               registrations: 'users/registrations'
             }
  get '/member-data', to: 'members#show'

  match '*path', to: 'application#fallback_index_html', via: :all

end
