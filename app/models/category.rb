class Category < ActiveRecord::Base
  include PgSearch
  multisearchable :against => :name
  validates :name, presence: true

  belongs_to :parent_category

  has_many :transactions
  has_many :subcategories, foreign_key: :category_id
  has_many :accounts, through: :transactions, inverse_of: :transactions
  has_many :users, through: :accounts, inverse_of: :accounts
  has_many :institutions, through: :accounts, inverse_of: :accounts
end
