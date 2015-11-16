# PennyRoyal

The [live site][heroku] will be up soon!

[heroku]: #

## Minimum Viable Product

PennyRoyal is a web application inspired by Mint built using Ruby on Rails
and React.js. PennyRoyal allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create a _user_ account
- [ ] Log in / Log out
- [ ] Add financial _institutions_
- [ ] Add and delete financial _accounts_
- [ ] Create _transactions_, or receive them from financial _institutions_
- [ ] Edit _transaction_ details
- [ ] Create _budgets_ and apply monthly amount limits
- [ ] Sort _transactions_ into _categories_ and _budgets_ by association.
- [ ] Observe monthly spending on _budgets_
- [ ] Observe _budget_ spending histories through _pastbudgets_
- [ ] Tag _transactions_ with multiple _tags_ and search _transactions_ by _tag_
- [ ] Receive _alerts_ on overview page regarding monthly overspending on _budgets_

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Institution model, Account model (2 days)

In Phase 1, I will begin by implementing _User_ signup and authentication (using BCrypt). I will then create the _Institution_ and _Account_ resources, including JSON API views(_Account_ only) and a temporary `new` view for _Account_.  By the end of phase 1, a user should be able to:

* sign up for the app
* log in and log out of their user account
* create a new financial account from an available institution.
* see an index of their current financial accounts (json)


[Details][phase-one]

### Phase 2: Flux Architecture and Transaction CRUD (3 days)

Phase 2 is focused on creating the _Transaction_, _Category_ and _Budget_ resources, setting up Flux, the React Router, and the React view structure for the main application. _Transactions_ are the core of the app, so after the basic Flux architecture has been set up, a _Transaction_ store and a _Budget_ store will be created.  By the end of phase 2:

* user can navigate to (barebones) views for overview, transactions, and budgets.
* Sample budgets properly collect amounts from all associated transactions (categories and sub-categories).

[Details][phase-two]

### Phase 3: Forms for Transactions, Budgets, Accounts (1 day)

Phase 3 adds forms for creating and editing _Transactions_, _Budgets_ and _Accounts_.  For _Budgets_ and _Transactions_ this includes inline forms within their respective index views and for _Accounts_ and _Budgets_ this includes the modal form views.  By the end of phase 3, a user should be able to utilize all forms and see the results updated immediately upon submission.

[Details][phase-three]

### Phase 4: Budget histories (1 day)

In Phase 4, I will incorporate calendar search by month into the BudgetIndex view.  By the end of phase 4, a user should be able to click on a month from the past year in the calendar search and have that month's budget replace the current budgets in the view.  Also the calendar search should have an indicator of whether money was gained or lost for a particular month.

[Details][phase-four]

### Phase 5: Alerts (1 day)

During Phase 5 I will incorporate _Alerts_ into the OverviewIndex view and _Tags_ into the _Transaction_ forms.  Tags will also be added to the AccountSmallIndex view with the same transaction filtering ability as accounts.  This will entail making _Alert_, _Tag_ and _TagLink_ resources and revisiting the respective views.

[Details][phase-five]

### Phase 6: Styling Cleanup and Seeding (1 day)

Creation of a root splash page if possible.  Addition of seed data from Yodlee if possible.

### Bonus Features (TBD)
#### Major
- [ ] Goals as a subcategory of _Budget_ with Goal view
#### Minor
- [ ] Automatic logout if idle
- [ ] Choice of how many transactions to show at once, along with numbered page-through
- [ ] Splitting _Transactions_ up into separate categories

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
