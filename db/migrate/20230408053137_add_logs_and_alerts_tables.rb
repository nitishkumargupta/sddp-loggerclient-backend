class AddLogsAndAlertsTables < ActiveRecord::Migration[7.0]
  def change
    create_table "alert_events", charset: "utf8", force: :cascade do |t|
      t.string "code"
      t.string "application_code"
      t.boolean "is_sent"
      t.bigint "alert_subscriber_id", null: false
      t.index ["alert_subscriber_id"], name: "fk_alert_event__alert_subscriber_id"
    end

    create_table "alert_subscribers", charset: "utf8", force: :cascade do |t|
      t.string "name", null: false
      t.string "email", null: false
      t.string "organisation_id", null: false
    end

    create_table "http_logs", charset: "utf8", force: :cascade do |t|
      t.datetime "request_timestamp", null: false
      t.string "http_method", null: false
      t.string "request_url", null: false
      t.string "http_status_code", null: false
      t.string "remote_ip_address", null: false
      t.integer "duration", null: false
      t.string "request_headers", null: false
      t.string "response_headers", null: false
      t.string "request_url_parameters"
      t.string "request_body"
      t.string "request_cookies"
      t.string "response_cookies"
      t.bigint "application_id", null: false
      t.index ["application_id"], name: "fk_http_log__application_id"
    end
    
    create_table "subscriptions", charset: "utf8", force: :cascade do |t|
      t.bigint "alert_subscriber_id", null: false
      t.string "application_id", null: false
      t.timestamps
    end

    add_foreign_key "alert_events", "alert_subscribers", column: "alert_subscriber_id"
    add_foreign_key "http_logs", "application_server_management_application_servers", column: "application_id", primary_key: "id"
  end
end
