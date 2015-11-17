class Institution < ActiveRecord::Base
  validates :name, :url, presence: true

  
end
