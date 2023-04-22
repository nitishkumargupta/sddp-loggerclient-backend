class ModifyAlertEvent < ActiveRecord::Migration[7.0]
  def change
    add_column :alert_events, :subscription_id, :bigint
    add_foreign_key "alert_events", "subscriptions", column: "subscription_id"
  end
end
