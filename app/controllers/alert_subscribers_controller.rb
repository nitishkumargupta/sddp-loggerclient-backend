class AlertSubscribersController < ApplicationController
  include RoleCheck
  include PaginationAndSorting
  include ResponseHeaders
  # Only user(s) with these role(s) are allowed to access Alert Subscribers
  before_action -> { check_role_permissions(%w[ROLE_ADMIN ROLE_ORGANIZATION_ADMIN]) }
  # Setting alert subscriber before action is executed
  before_action :set_alert_subscribers
  before_action :set_alert_subscriber, only: [:edit, :show, :destroy, :update]

  def index
    query = params[:query]
    q = params[:q]
    alert_subscribers = @alert_subscribers.ransack(q).result
    alert_subscribers = apply_pagination_and_sorting(alert_subscribers, query)
    alert_subscribers = alert_subscribers.map{|subscriber| subscriber.attributes.merge(applications: subscriber.application_servers.pluck(:code))}
    render json: alert_subscribers, status: :ok
  end

  def show
    subscriptions = Subscription.where(alert_subscriber_id: @alert_subscriber.id)
    applications = []
    subscriptions.each do |subscription|
      applications << subscription.application_server
    end
    render json: @alert_subscriber.attributes.merge(applications: applications).to_json
  end

  def create
    subscriber = AlertSubscriber.new(alert_subscriber_params)
    # initialising subscription(s) for an alert subscriber
    params["applications"].each do |application|
      subscriber.subscriptions.build(application_id: application["id"])
    end
    # fetching organisation id from logged-in user
    subscriber.organisation_id = @current_user.organisation_id
    if subscriber.save
      render json: subscriber.to_json, status: 200
    else
      render json: subscriber.errors, status: :unprocessable_entity
    end
  end

  def update
    # Deleting existing subscriptions for the alert subscriber
    Subscription.where(alert_subscriber_id: @alert_subscriber.id).delete_all
    # initialising new subscription(s) for an alert subscriber
    params["applications"].each do |application|
      @alert_subscriber.subscriptions.build(application_id: application["id"])
    end
    if @alert_subscriber.update(alert_subscriber_params)
      render json: @alert_subscriber.to_json
    else
      render json: @alert_subscriber.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if @alert_subscriber.destroy
      render json: { message: "Alert Subscriber deleted" }, status: :ok
    else
      render json: { error: "Alert Subscriber not found" }, status: :not_found
    end
  end

  private
  
  # Fetching alert subscribers of logged-in organisation user
  def set_alert_subscribers
    if current_user_has_role?('ROLE_ADMIN')
      @alert_subscribers = AlertSubscriber.all
    else
      @alert_subscribers = @current_user.organisation.alert_subscribers
    end
  end

  # Fetching alert subscriber based on id
  def set_alert_subscriber
    @alert_subscriber = @alert_subscribers.find_by(params[:id])
  end

  # Only these params are allowed in the POST/PUT/PATCH requests to prevent SQL injection
  def alert_subscriber_params
    params.require(:alert_subscriber).permit(:name, :email, applications_attributes: [:id])
  end
end
