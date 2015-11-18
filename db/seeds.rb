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
  id: 1,
  email:"solar@solar.com",
  password_digest: "$2a$10$tB8EJ485joiZtAAmgDA.3.ZaaJY6PEtR8Krb5DS0OqlxSvM9q5JH6",
  session_token: "OMSczi-YPj0ACv4WViztAw"
)

Account.create(
  name: "Pirate Best Savings",
  user_id: 1,
  institution_id: 6,
  username: "solar",
  user_password: "solarsolar",
  balance: 20.00,
  account_type: "savings",
)

Account.create(
  name: "Swashy Savings",
  user_id: 1,
  institution_id: 8,
  username: "solar",
  user_password: "solarsolar",
  balance: 500.00,
  account_type: "savings",
)

Account.create(
  name: "Yeomans Auto Loan",
  user_id: 1,
  institution_id: 9,
  username: "solar",
  user_password: "solarsolar",
  balance: 500.00,
  account_type: "savings",
)
