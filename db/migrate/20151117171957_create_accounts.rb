class CreateAccounts < ActiveRecord::Migration
  def change
    create_table :accounts do |t|
      t.string :name, null: false
      t.integer :user_id, null: false
      t.integer :institution_id, null: false
      t.string :username, null: false
      t.string :user_password, null: false
      t.decimal :balance, precision: 8, scale: 2, null: false
      t.string :account_type, null: false

      t.timestamps null: false
    end
    add_index :accounts, :name
    add_index :accounts, :user_id
    add_index :accounts, :institution_id
    add_index :accounts, :account_type
  end
end
