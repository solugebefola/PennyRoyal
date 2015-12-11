class ChangeColumn < ActiveRecord::Migration
  def change
    change_column :transactions, :category_id, 'integer USING category_id::integer'
  end
end
