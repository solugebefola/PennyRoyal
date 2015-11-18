class CreateTransactions < ActiveRecord::Migration
  def change
    create_table :transactions do |t|
      t.integer :account_id, null: false
      t.string :category_id, null: false
      t.datetime :date, null: false
      t.decimal :amount, precision: 10, scale: 2, null: false
      t.string :description, null: false
      t.text :notes

      t.timestamps null: false
    end
    add_index :transactions, :account_id
    add_index :transactions, :category_id
    add_index :transactions, :date
    add_index :transactions, :amount
    add_index :transactions, :description
  end
end
