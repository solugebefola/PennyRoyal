class AddDateToTransactions < ActiveRecord::Migration
  def change
    add_column :transactions, :date, :datetime
    add_index :transactions, :date
  end
end
