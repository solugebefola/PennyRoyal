class CreateBudgets < ActiveRecord::Migration
  def change
    create_table :budgets do |t|
      t.string :name, null: false
      t.integer :category_id, null: false
      t.decimal :limit, precision: 10, scale: 2
      t.decimal :balance, precision: 10, scale: 2

      t.timestamps null: false
    end
    add_index :budgets, :name
    add_index :budgets, :category_id
  end
end
