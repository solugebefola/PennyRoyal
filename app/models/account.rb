class Account < ActiveRecord::Base
  validates :name, :user_id, :institution_id, :username, :user_password, :balance, :account_type, presence: true
  validates :balance, :user_id, :institution_id, numericality: true
  validates :account_type, inclusion: { in: %w[checking savings loan investment credit_card cash] }

  belongs_to :institution
  belongs_to :user

end
