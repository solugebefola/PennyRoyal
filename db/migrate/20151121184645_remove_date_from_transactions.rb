class RemoveDateFromTransactions < ActiveRecord::Migration
  def change
    remove_column :transactions, :date
  end
end
