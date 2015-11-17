# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## institutions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
url         | string    | not null
logo_url    | string    |

## accounts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    |not null
user_id     | integer   | not null, foreign key (references users), indexed
institution_id| integer | not null, foreign key (references institution), indexed
username    | string    | not null
user_password | string  | not null
balance     | decimal   | not null, precision: 8, scale: 2
account_type| string    | not null, (model validations for inclusion in category)

## transactions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
account_id  | integer   | not null, foreign key (references accounts), indexed
category_id | integer   |
date        | datetime  | not null, indexed
amount      | decimal   | not null, scale: 2, indexed
description | string    | not null
status      | string    | not null
notes       | text      |

## categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
category_id | integer   | foreign key (references parent category), indexed

## budgets
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
category_id | integer   | not null, foreign key (references category), indexed
limit       | integer   | not null, scale: 2
balance     | decimal   | not null, scale: 2
date        | datetime  | not null, indexed

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taglink
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
transaction_id     | integer   | not null, foreign key (references transactions), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed
