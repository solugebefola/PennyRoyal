# Phase 2: Flux Architecture and Transaction CRUD (3 days)

## Rails
### Models
* Transaction
* Category
* Budget

### Controllers
* Api::TransactionsController (create, show, index, update, destroy)
* Api::CategoriesController (create, index, update, destroy)
* Api::BudgetsController (create, index, update, destroy)

### Views
transaction/index.html.erb
transaction/show.html.erb
category/index.html.erb
category/show.html.erb
budget/index.html.erb
budget/show.html.erb

## Flux
### Views (React Components)
* OverviewIndex
  - AccountIndex
    - AccountTypeIndex
      - AccountIndexItem
  - OverviewMain
    - BudgetSmallIndex
      - BudgetSmallIndexItem

* AccountEditForm
* AccountNewForm

* TransactionsIndex
  - TransactionMain
    - TransactionSearch
    - TransactionIndex
      - TransactionIndexItem
        - TransactionForm
* AccountsSmallIndex
  - AccountTypeNavbar
  - AccountSmallIndexItem

* BudgetsIndex
  - BudgetCalendarNavbar
  - BudgetIndex
    - BudgetIndexItem
  - BudgetSummary
* BudgetForm

### Stores
* Transaction
* Budget

### Actions
* ApiActions.receiveAllTransactions
* ApiActions.receiveSingleTransaction
* ApiActions.deleteTransaction
* ApiActions.receiveAllCurrentBudgets
* ApiActions.receiveSingleCurrentBudget
* ApiActions.deleteBudget

### ApiUtil
* ApiUtil.fetchAllTransactions
* ApiUtil.fetchSingleTransaction
* ApiUtil.createTransaction
* ApiUtil.editTransaction
* ApiUtil.destroyTransaction
* ApiUtil.fetchAllCurrentBudgets
* ApiUtil.fetchSingleCurrentBudget ?
* ApiUtil.createBudget
* ApiUtil.editBudget
* ApiUtil.destroyBudget

## Gems/Libraries
* Flux Dispatcher
* Event Emitter
