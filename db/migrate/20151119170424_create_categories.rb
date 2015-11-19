class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.string :name, null: false
      t.integer :category_id, null: false

      t.timestamps null: false
    end
    add_index :categories, :name
    add_index :categories, :category_id
  end
end
