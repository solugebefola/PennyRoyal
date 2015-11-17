class CreateInstitutions < ActiveRecord::Migration
  def change
    create_table :institutions do |t|
      t.string :name, null: false
      t.string :url, null: false
      t.string :logo_url

      t.timestamps
    end
    add_index :institutions, :name, unique: true
  end
end
