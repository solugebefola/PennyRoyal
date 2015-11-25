# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#
Institution.create(
  name: "First Pirate Bank",
  url: "#",
  logo_url: "#",
)

Institution.create(
  name: "Last Pirate Bank",
  url: "#",
  logo_url: "#",
)

Institution.create(
  name: "Swashbuckler Bank",
  url: "#",
  logo_url: "#",
)

Institution.create(
  name: "Ye Old Bank",
  url: "#",
  logo_url: "#",
)

User.create(
  email:"solar@solar.com",
  password_digest: "$2a$10$tB8EJ485joiZtAAmgDA.3.ZaaJY6PEtR8Krb5DS0OqlxSvM9q5JH6",
  session_token: "OMSczi-YPj0ACv4WViztAw"
)

User.create(
  email: "guest@ourfineestablishment.com",
  password_digest: "$2a$10$/VOOu0w8/pT.iGcAIQmRSujuqHgQ1WZhUdHxtsovZLNMy9QkYKaTK",
  session_token: "bkqNvxRJkegATHb26ANeVw",
)

Account.create(
  name: "Pirate Best Savings",
  user_id: 1,
  institution_id: 1,
  username: "solar",
  user_password: "solarsolar",
  balance: 20.00,
  account_type: "savings",
)

Account.create(
  name: "Swashy Savings",
  user_id: 1,
  institution_id: 2,
  username: "solar",
  user_password: "solarsolar",
  balance: 500.00,
  account_type: "savings",
)

Account.create(
  name: "Yeomans Boat Loan",
  user_id: 1,
  institution_id: 3,
  username: "solar",
  user_password: "solarsolar",
  balance: -500.00,
  account_type: "loan",
)

Account.create(
  name: "Pirate Best Savings",
  user_id: 3,
  institution_id: 1,
  username: "solar",
  user_password: "solarsolar",
  balance: 22.00,
  account_type: "savings",
)

Account.create(
  name: "Swashy Savings",
  user_id: 3,
  institution_id: 2,
  username: "solar",
  user_password: "solarsolar",
  balance: 514.00,
  account_type: "savings",
)

Account.create(
  name: "Yeomans Boat Loan",
  user_id: 3,
  institution_id: 3,
  username: "solar",
  user_password: "solarsolar",
  balance: -1000.00,
  account_type: "loan",
)

Category.create!(
  name: "UNCATEGORIZED"
)

Category.create!(
  name: "Boat supplies"
)

Category.create!(
  name: "Wine and Rum"
)

Category.create!(
  name: "Accoutrements"
)

Category.create!(
  name: "Raids"
)

Transaction.create!(
  category_id: 1,
  account_id: 2,
  date: DateTime.now,
  amount: -223.23,
  description: "Cannonballs from Cannonball Alley"
)

Transaction.create!(
  category_id: 1,
  account_id: 1,
  date: DateTime.now,
  amount: -100.32,
  description: "Sails from Sails r us"
)

Transaction.create!(
  category_id: 3,
  account_id: 4,
  date: DateTime.now,
  amount: -100.32,
  description: "Pirate Hat from Skullo"
)

Transaction.create!(
  category_id: 1,
  account_id: 5,
  date: DateTime.now,
  amount: -123.32,
  description: "Sails from Sails r us"
)

Transaction.create!(
  category_id: 6,
  account_id: 4,
  date: DateTime.now,
  amount: 4000.18,
  description: "Bounty from the sea"
)

Transaction.create!(
  category_id: 6,
  account_id: 6,
  date: DateTime.now,
  amount: -100.12,
  description: "loan payment"
)
