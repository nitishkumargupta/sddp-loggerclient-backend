class AlertEventsController < ApplicationController
  include RoleCheck
  include PaginationAndSorting
  before_action -> { check_role_permissions(['ROLE_ADMIN', 'ROLE_ORGANIZATION_ADMIN']) }, only: [:update]
  before_action :set_alert_events, except: [:create]
  before_action :set_alert_event, except: [:create, :index]

  def index
    check_role_permissions(['ROLE_ORGANIZATION_ADMIN'])
    query = params[:query]
    q = params[:q]
    alert_events = @alert_events&.ransack(q)&.result
    alert_events = apply_pagination_and_sorting(alert_events, query)
    alert_events = alert_events.map do |alert_event|
      event = {}
      alert_event.attributes.map{|key,value| event[key.camelcase(:lower)] = value}
      event
    end
    render json: alert_events, status: :ok
  end

  def show
    if current_user_has_role?('ROLE_ORGANIZATION_ADMIN')
      render json: @alert_event.to_json.camelcase(:lower)
    end
  end

  def create
    check_role_permissions(['ROLE_ORGANIZATION_ADMIN'])
    event = AlertEvent.new(event_params)
    event.application_code = params[:applicationCode]
    event.is_sent = params[:isSent]
    event.alert_subscriber_id = params[:alertSubscriber][:id]
    if event.save
      render json: event.to_json, status: 200
    else
      render json: event.errors, status: :unprocessable_entity
    end
  end

  def update
    if current_user_has_role?('ROLE_ORGANIZATION_ADMIN')
      @alert_event.application_code = params[:applicationCode]
      @alert_event.is_sent = params[:isSent]
      @alert_event.alert_subscriber_id = params[:alertSubscriber][:id]
      if @alert_event.update(event_params)
        render json: @alert_event.to_json
      else
        render json: @alert_event.errors, status: :unprocessable_entity
      end
    end
  end

  def destroy
    check_role_permissions(['ROLE_ORGANIZATION_ADMIN'])
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
    params.require(:alert_event).permit(:code, :application_code, :is_sent, applications_attributes: [:id])
  end
end
