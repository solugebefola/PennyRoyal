class AddPaperclipFunctionalityToUsers < ActiveRecord::Migration
  def change
    add_attachment :users, :profile

  end
end
