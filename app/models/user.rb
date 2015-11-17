class User < ActiveRecord::Base
  validates :email, :password_digest, :session_token, presence: true
  validates :password length: {minimum: 8, allow_nil: true}
#Addnote: additional validations for password
end

attr_reader :password

after_initialize :ensure_session_token

def self.generate_token
  SecureRandom::urlsafe_base64(16)
end

def self.find_by_credentials(email, password)
  @user = User.find_by_email(email)
  @user.valid_password?(password) ? @user : nil
end

def reset_token!
  self.session_token = User.generate_token
  self.save
  self.session_token
end

def valid_password?(password)
  BCrypt::Password.new(self.password_digest).is_password?(password)
end

def create_password(password)
  self.password_digest = BCrypt::Password.create(password)
  self.save
end

private
  def ensure_session_token
    self.session_token ||= self.reset_token!
