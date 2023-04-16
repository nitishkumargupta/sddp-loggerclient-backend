class AlertEventsController < ApplicationController
  include RoleCheck
  include PaginationAndSorting
  include ResponseHeaders
  before_action -> { check_role_permissions(['ROLE_ORGANIZATION_ADMIN']) }
  before_action :set_alert_events, except: [:create]
  before_action :set_alert_event, except: [:create, :index]

  def index
    query = params[:query]
    q = params[:q]
    alert_events = @alert_events&.ransack(q)&.result
    alert_events = apply_pagination_and_sorting(alert_events, query)
    render json: alert_events, status: :ok
  end

  def show
    render json: @alert_event.to_json
  end

  def create
    event = AlertEvent.new(event_params)
    event.alert_subscriber_id = params[:alertSubscriber][:id]
    if event.save
      render json: event.to_json, status: 200
    else
      render json: event.errors, status: :unprocessable_entity
    end
  end

  def update
      @alert_event.alert_subscriber_id = params[:alertSubscriber][:id]
      if @alert_event.update(event_params)
        render json: @alert_event.to_json
      else
        render json: @alert_event.errors, status: :unprocessable_entity
      end
  end

  def destroy
    if @alert_event.destroy
      render json: { message: "Alert Event deleted" }, status: :ok
    else
      render json: { error: "Alert Event not found" }, status: :not_found
    end
  end

  private

  def set_alert_events
    subscriber_ids = @current_user.organisation.alert_subscribers.pluck(:id)
    @alert_events = AlertEvent.where(alert_subscriber_id: subscriber_ids)
  end

  def set_alert_event
    @alert_event = @alert_events.find(params[:id])
  end

  def event_params
    params.require(:alert_event).permit(:code, :is_sent, :application_code)
  end
end
