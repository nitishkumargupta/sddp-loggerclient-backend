# This migration comes from application_server_management (originally 20230323123220)
class AddOrganisationIdinApplicationServer < ActiveRecord::Migration[7.0]
  def change
    add_column :application_server_management_application_servers, :organisation_id, :integer
  end
end
