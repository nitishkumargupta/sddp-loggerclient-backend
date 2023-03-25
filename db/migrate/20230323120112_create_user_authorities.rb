class CreateUserAuthorities < ActiveRecord::Migration[6.0]
  def change
    create_table :user_authorities do |t|
      t.references :user, null: false, foreign_key: true
      t.string :authority_name, null: false

    end

    add_foreign_key :user_authorities, :authorities, column: :authority_name, primary_key: :name
  end
end

