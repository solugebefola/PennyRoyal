require 'rails_helper'
require 'user'

describe User do
  it 'validates password length' do
    bad_user = User.new()
    bad_user.password = "short"
    expect(bad_user.valid?).to be_falsey

    bad_user.password = "longenough"
    expect(bad_user.valid?).to be_truthy
  end
end
