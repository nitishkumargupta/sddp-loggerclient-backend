class AddOrganisationIdInUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :organisation_id, :integer
  end
end
