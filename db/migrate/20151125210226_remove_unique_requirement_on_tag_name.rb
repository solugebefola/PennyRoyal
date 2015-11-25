class RemoveUniqueRequirementOnTagName < ActiveRecord::Migration
  def change
    remove_index :tags, :name
    add_index :tags, :name
  end
end
