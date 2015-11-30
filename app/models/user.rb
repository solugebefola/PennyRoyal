class User < ActiveRecord::Base
  validates :email, :password_digest, :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 8, allow_nil: true }
  validates :email, format: { with: /\A([^@\s]+)@(([-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }
  #Addnote: password regexp validation

  has_attached_file :profile, default_url: "pennyroyal_logo.png"
  validates_attachment_content_type :profile, content_type: /\Aimage\/.*\Z/

  has_many :accounts, inverse_of: :user
  has_many :institutions, through: :accounts
  has_many :transactions, through: :accounts
  has_many :taglinks, inverse_of: :user
  has_many :tags

attr_reader :password

after_initialize :ensure_session_token

def self.generate_token
  SecureRandom::urlsafe_base64(16)
end

def self.find_by_credentials(email, password)
  @user = User.find_by_email(email)
  (@user && @user.valid_password?(password)) ? @user : nil
end

def reset_token!
  self.session_token = User.generate_token
  self.save
  self.session_token
end

def password=(password)
  @password = password
  self.password_digest = BCrypt::Password.create(password)
end

def valid_password?(password)
  BCrypt::Password.new(self.password_digest).is_password?(password)
end

def generate_transactions(num)
  self.accounts.each do |account|
    account.create_transactions(num)
  end
end

private
  def ensure_session_token
    self.session_token ||= self.reset_token!
  end
end
