class Account < ActiveRecord::Base
  include PgSearch
  validates :name, :user_id, :institution_id, :username, :user_password, :balance, :account_type, presence: true
  validates :balance, :user_id, :institution_id, numericality: true
  validates :account_type, inclusion: { in: %w[checking savings loan investment credit_card cash property] }

  belongs_to :institution
  belongs_to :user
  has_many :transactions

  def create_transactions(number)
    number.times do |time|
      cat_id = Category.all.sample.id
      description = Faker::Commerce.product_name
      date = Faker::Date.backward(rand(100))
      amount = (rand(10000)/100) - 50

      self.transactions.create(
        category_id: cat_id,
        description: description,
        date: date,
        amount: amount
      )
    end
  end

end
