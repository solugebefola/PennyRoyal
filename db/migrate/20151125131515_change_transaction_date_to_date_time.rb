class ChangeTransactionDateToDateTime < ActiveRecord::Migration
  def change
    change_column :transactions, :date, :datetime
  end
end
