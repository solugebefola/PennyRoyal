class Category < ActiveRecord::Base
  validates :name, presence: true

  belongs_to :category
  has_many :transactions
  has_many :accounts, through: :transactions, inverse_of: :transactions
  has_many :users, through: :accounts, inverse_of: :accounts
  has_many :institutions, through: :accounts, inverse_of: :accounts
end
