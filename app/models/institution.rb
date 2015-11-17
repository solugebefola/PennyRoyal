class Institution < ActiveRecord::Base
  validates :name, :url, presence: true

  has_many :accounts
  has_many :users, through: :accounts
end
