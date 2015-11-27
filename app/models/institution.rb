class Institution < ActiveRecord::Base
  include PgSearch
  multisearchable :against => :name
  validates :name, :url, presence: true
  has_many :accounts
  has_many(
    :account_bases,
    class_name: "AccountBase",
    foreign_key: :institution_id,
    primary_key: :id
  )
  has_many :users, through: :accounts
  has_many :transactions, through: :accounts
end
