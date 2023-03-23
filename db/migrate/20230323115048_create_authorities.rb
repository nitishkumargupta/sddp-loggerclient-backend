class CreateAuthorities < ActiveRecord::Migration[7.0]
  def change
    create_table :authorities, id: false do |t|
      t.string :name, primary_key: true
    end
  end
end
