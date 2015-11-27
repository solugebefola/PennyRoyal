class Account < ActiveRecord::Base
  include PgSearch
  multisearchable :against => [:name, :account_type]
  validates :name, :user_id, :institution_id, :username, :user_password, :balance, :account_type, presence: true
  validates :balance, :user_id, :institution_id, numericality: true
  validates :account_type, inclusion: { in: %w[checking savings loan investment credit_card cash property] }

  belongs_to :institution
  belongs_to :user
  has_many :transactions



end
