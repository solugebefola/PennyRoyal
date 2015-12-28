require 'rails_helper'

describe User do
  before(:each) do
    @bad_user = User.new()
    @bad_user.email = "a@b.com"
    @bad_user.reset_token!
    @bad_user.password = "longenough"
  end

  it 'validates password length' do
    expect(@bad_user.valid?).to be_truthy

    @bad_user.password = "short"
    expect(@bad_user.valid?).to be_falsey
  end

  it 'validates email format' do
    @bad_user.email = "a@b"
    expect(@bad_user.valid?).to be_falsey

    @bad_user.email = "@b.com"
    expect(@bad_user.valid?).to be_falsey

    @bad_user.email = " mm@mm.com"
    expect(@bad_user.valid?).to be_falsey

    @bad_user.email = "a@b .com"
    expect(@bad_user.valid?).to be_falsey
  end
end
