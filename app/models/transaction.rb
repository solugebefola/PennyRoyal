class Transaction < ActiveRecord::Base
  validates :account_id, :category_id, :amount, :description, presence: true
  validates :amount, :account_id, :category_id, numericality: true
  after_initialize :ensure_date_filled

  belongs_to :account
  belongs_to :category
  has_one :user, through: :account
  has_one :institution, through: :account

  def ensure_date_filled
    self.date ||= self.created_at
  end

end
