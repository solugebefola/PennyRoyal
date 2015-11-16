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
- [ ] Sort _transactions_ into _budget_ categories
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

In Phase 1, I will begin by implementing _User_ signup and authentication (using BCrypt). I will then create the _Institution_ and _Account_ resources, including JSON API views(_Account_ only).  By the end of phase 1, a user should be able to
* sign up for an account
* log in and log out of their account
* see an index of their current accounts


[Details][phase-one]

### Phase 2: Flux Architecture and Note CRUD (2.5 days)

Phase 2 is focused on creating the _transaction_ and _budget_ resources, setting up Flux, the React Router, and the React view structure for the main application. _Transactions_ are the core of the app, so after the basic Flux architecture has been set up, a _Transaction_ store will be created.  _Transactions_ are organized by `TransactionIndex` which can be filtered by _Account_ at this point.

[Details][phase-two]

### Phase 3: Notebooks and Tags (2 days)

Phase 3 adds organization to the Notes. Notes belong to a Notebook, which has
its own `Index` view. Create JSON API for Notebooks. Notes can also now be
tagged with multiple tags. Users can bring up notes in a separate `SearchIndex`
view by searching for their tags. Once the tag search is implemented, I will
extend this to a fuzzy search through every Note's content.

[Details][phase-three]

### Phase 4: Allow Complex Styling in Notes (1 day)

Using quill.js, allow for complex styling of notes.

[Details][phase-four]

### Phase 5: Reminders and Garbage Collection (1 day)

Phase 5 introduces two new features. First, users can set reminders on notes
which will at the time they are set for prompt the user to review and edit the
given note. In addition, I will implement a feature that asks users to review
notes once they reach a certain age and ask whether they should be kept,
archived, or deleted.

[Details][phase-five]

### Phase 6: Styling Cleanup and Seeding (1 day)

Bootstrap will have been used to keep things organized up until now, but in
Phase 6 I will add styling flourishes and make modals out of some elements (like
the NotebookForm).

### Bonus Features (TBD)
- [ ] Prettify transitions
- [ ] Use javascript library for cleaner tag selection
- [ ] Changelogs for Notes
- [ ] Pagination / infinite scroll for Notes Index
- [ ] Multiple sessions

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
