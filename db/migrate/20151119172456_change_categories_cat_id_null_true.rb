class ChangeCategoriesCatIdNullTrue < ActiveRecord::Migration
  def change
    change_column :categories, :category_id, :integer, null:true
  end
end
