# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_04_08_053137) do
  create_table "action_mailbox_inbound_emails", charset: "utf8", force: :cascade do |t|
    t.integer "status", default: 0, null: false
    t.string "message_id", null: false
    t.string "message_checksum", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["message_id", "message_checksum"], name: "index_action_mailbox_inbound_emails_uniqueness", unique: true
  end

  create_table "action_text_rich_texts", charset: "utf8", force: :cascade do |t|
    t.string "name", null: false
    t.text "body", size: :long
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["record_type", "record_id", "name"], name: "index_action_text_rich_texts_uniqueness", unique: true
  end

  create_table "active_storage_attachments", charset: "utf8", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", charset: "utf8", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", charset: "utf8", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

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
  end

  create_table "application_server_management_application_servers", charset: "utf8", force: :cascade do |t|
    t.string "name"
    t.string "code"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "organisation_id"
  end

  create_table "application_server_management_tokens", charset: "utf8", force: :cascade do |t|
    t.string "access_token"
    t.string "refresh_token"
    t.string "expiry_date"
    t.boolean "is_active"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "application_server_id"
  end

  create_table "authorities", primary_key: "name", id: :string, charset: "utf8", force: :cascade do |t|
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

  create_table "jwt_denylist", charset: "utf8", force: :cascade do |t|
    t.string "jti", null: false
    t.datetime "exp", null: false
    t.index ["jti"], name: "index_jwt_denylist_on_jti"
  end

  create_table "organisations", charset: "utf8", force: :cascade do |t|
    t.string "name"
    t.string "code"
    t.string "address"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "rel_alert_subscriber__applications", charset: "utf8", force: :cascade do |t|
    t.bigint "application_id", null: false
    t.bigint "alert_subscriber_id", null: false
    t.index ["alert_subscriber_id", "application_id"], name: "fk_rel_alert_subscriber__application__alert_subscriber_id", unique: true
    t.index ["application_id"], name: "fk_rel_alert_subscriber__application__application_id"
  end

  create_table "user_authorities", charset: "utf8", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "authority_name", null: false
    t.index ["authority_name"], name: "fk_rails_ee44246579"
    t.index ["user_id"], name: "index_user_authorities_on_user_id"
  end

  create_table "users", charset: "utf8", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name"
    t.string "last_name"
    t.integer "organisation_id"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "alert_events", "alert_subscribers"
  add_foreign_key "http_logs", "application_server_management_application_servers", column: "application_id"
  add_foreign_key "rel_alert_subscriber__applications", "alert_subscribers"
  add_foreign_key "rel_alert_subscriber__applications", "application_server_management_application_servers", column: "application_id"
  add_foreign_key "user_authorities", "authorities", column: "authority_name", primary_key: "name"
  add_foreign_key "user_authorities", "users"
end
