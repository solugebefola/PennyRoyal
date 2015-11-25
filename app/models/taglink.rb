class Taglink < ActiveRecord::Base
  validates :tag_id, :transaction_id, presence: true

  belongs_to(
    :tagged_transaction,
    class_name: "Transaction",
    foreign_key: :transaction_id
  )
  belongs_to :tag, inverse_of: :taglinks
end
