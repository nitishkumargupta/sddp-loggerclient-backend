# This migration comes from application_server_management (originally 20230323102651)
class CreateApplicationServerManagementTokens < ActiveRecord::Migration[7.0]
  def change
    create_table :application_server_management_tokens do |t|
      t.string :access_token
      t.string :refresh_token
      t.string :expiry_date
      t.boolean :is_active

      t.timestamps

      t.integer :application_server_id
    end
  end
end
