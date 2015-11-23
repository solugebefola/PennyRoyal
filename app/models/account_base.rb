class AccountBase < ActiveRecord::Base
  validates :name, :institution_id, :account_type, presence:true

  belongs_to :institution
end
