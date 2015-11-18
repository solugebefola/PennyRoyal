class Transaction < ActiveRecord::Base
  validates :account_id, :category_id, :date, :amount, :description, presence: true
  validates :amount, :account_id, :category_id, numericality: true

  belongs_to :account
  belongs_to :category
  has_one :user, through: :account
  has_one :institution, through: :account
end
