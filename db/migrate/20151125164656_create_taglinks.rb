class CreateTaglinks < ActiveRecord::Migration
  def change
    create_table :taglinks do |t|
      t.integer :transaction_id
      t.integer :tag_id

      t.timestamps null: false
    end
    add_index :taglinks, :tag_id
    add_index :taglinks, :transaction_id
  end
end
