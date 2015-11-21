class Category < ActiveRecord::Base
  validates :name, presence: true

  belongs_to{
    :parent_category,
    class_name: "Category",
    foreign_key: :category_id,
    primary_key: :id
  }

  has_many :transactions
  has_many :subcategories, foreign_key: :category_id
  has_many :accounts, through: :transactions, inverse_of: :transactions
  has_many :users, through: :accounts, inverse_of: :accounts
  has_many :institutions, through: :accounts, inverse_of: :accounts
end
