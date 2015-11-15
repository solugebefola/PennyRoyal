# Pepper App
## Schema
### User
* Email
* Password
* Zipcode
* Country

### Bank
* Name
* Routing number
* Address
* Image link (logo) ?

### Account
* Account number ?
* Bank id
* User id
* User name
* User password

### Transaction
* User id
* Bank account id
* Date/time
* Amount
* Vendor
* Status
* Details
* Notes
* Budget id (category)

### Tag (applied to transactions)
* name

### Tag link
* Tag id
* transaction id

### Budget
* Name
* Budget id (subcategories)
* Limit
* Balance
* Month
* Year

### Investment (Bonus?)
* This may just be another form of account
* It may get its history/transactions from the bank rather than storing it in the database.
