class CreateTransactionUpdates < ActiveRecord::Migration
  def change
    create_table :transaction_updates do |t|
      t.timestamps null: false
    end
  end
end
