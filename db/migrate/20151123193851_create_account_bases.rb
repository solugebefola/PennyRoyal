class CreateAccountBases < ActiveRecord::Migration
  def change
    create_table :account_bases do |t|
      t.integer :institution_id, null:false
      t.string :name, null:false
      t.string :account_type, null:false

      t.timestamps null: false
    end
    add_index :account_bases, :institution_id
  end
end
