class Tag < ActiveRecord::Base
  include PgSearch
  multisearchable :against => :name
  validates :user_id, :name, presence: true

  has_many :taglinks, inverse_of: :tag
  belongs_to :user, inverse_of: :tags
  has_many :transactions, through: :taglinks, source: :tagged_transaction
end
