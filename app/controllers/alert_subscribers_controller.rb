class AlertSubscribersController < ApplicationController
  include RoleCheck
  include PaginationAndSorting
  include ResponseHeaders
  before_action -> { check_role_permissions('ROLE_ORGANIZATION_ADMIN']) }
  before_action :set_subscriber, only: [:edit, :show, :destroy]

  def index
    query = params[:query]
    q = params[:q]
    alert_subscribers = AlertSubscriber.ransack(q).result
    alert_subscribers = apply_pagination_and_sorting(alert_subscribers, query)
    render json: alert_subscribers, status: :ok
  end

  def show
    render json: @subscriber.to_json
  end

  def create
    subscriber = AlertSubscriber.new(subscriber_params)
    params["applications"].each do |application|
      subscriber.subscriptions.build(application_id: application["id"])
    end
    subscriber.organisation_id = @current_user.organisation_id
    if subscriber.save
      render json: subscriber.to_json, status: 200
    else
      render json: subscriber.errors, status: :unprocessable_entity
    end
  end

  def update
    Subscription.where(alert_subscriber_id: @subscriber.id).delete_all
    params["applications"].each do |application|
      @subscriber.subscriptions.build(application_id: application["id"])
    end
    if @subscriber.update(subscriber_params)
      render json: @subscriber.to_json
    else
      render json: @subscriber.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if @subscriber.destroy
      render json: { message: "Alert Subscriber deleted" }, status: :ok
    else
      render json: { error: "Alert Subscriber not found" }, status: :not_found
    end
  end

  private

  def set_subscriber
    subscribers = @current_user.organisation.alert_subscribers
    @subscriber = subscribers.find_by(params[:id])
  end

  def subscriber_params
    params.require(:alert_subscriber).permit(:name, :email, applications_attributes: [:id])
  end
end
