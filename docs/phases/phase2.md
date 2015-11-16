# Phase 2: Flux Architecture and Transaction CRUD (2.5 days)

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
  - BudgetIndex
    - BudgetIndexItem
  - BudgetSummary


### Stores
* Transaction
* Budget

### Actions
* ApiActions.receiveAllTransactions
* ApiActions.receiveSingleTransaction
* ApiActions.receiveAllMonthBudgets
* ApiActions.receiveSingleMonthBudget


### ApiUtil
* ApiUtil.fetchAllTransactions
* ApiUtil.fetchSingleTransaction
* ApiUtil.fetchAllMonthBudgets
* ApiUtil.fetchSingleMonthBudget


## Gems/Libraries
* Flux Dispatcher
* Event Emitter
