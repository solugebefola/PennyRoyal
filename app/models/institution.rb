class Institution < ActiveRecord::Base
  validates :name, :url, presence: true

  has_many :accounts
  has_many :account_bases
  has_many :users, through: :accounts
  has_many :transactions, through: :accounts
end
