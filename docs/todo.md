## Todo
### Tuesday
- [ ] finish user auth
  - [x] create user table, don't forget indexes
  - [x] routes for session, user
  - [x] Session controller
  - [x] User model
  - [x] Users controller
  - [x] include confirm email and confirm password fields for user sign up
  - [x] include regexp for proper email format
  - [x] views for log in and sign up
    - [ ] css styling for log in and sign up (night)
  - [ ] views for user show
- [ ] Create Institution resources
  - [x] Institution table with indexes
  - [ ] Institution model
  - [ ] Institution controller
- [ ] Create Account resources (indexes!) with associations
  - [ ] Account table, balance default 0
  - [ ] routes
  - [ ] Account model
    - [ ] associations for Institutions and Users 
  - [ ] Account controller
  - [ ] Account JSON API views
    - [ ] index lists users accounts with name, associated bank, balance (default: 0)
    - [ ] show lists users account, username, password?, bank name

### Wednesday

- [ ] user auth include additional password validations with regexp