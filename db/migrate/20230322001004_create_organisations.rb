class CreateOrganisations < ActiveRecord::Migration[7.0]
  def change
    create_table :organisations do |t|
      t.string :name
      t.string :code
      t.string :address
      t.string :email

      t.timestamps
    end
  end
end
