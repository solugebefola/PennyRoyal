# Phase 5: Reminders and Garbage Collection

## Rails
### Models
* Alert
* Tag
* Taglink

### Controllers
* Api::TagController (create, destroy, index, show, update)
* Api::AlertController (create, destroy, index)

### Views

## Flux
### Views (React Components)
* OverviewIndex
  - OverviewMain
    - _AlertIndex_
      - _AlertIndexItem_
* TransactionIndex
  - _AccountSmallIndex_
    - _AccountSmallIndexItem_

### Stores
* Reminder

### Actions
* ApiActions.receiveAllAlerts

### ApiUtil
* ApiUtil.fetchAllCurrentAlerts
* ApiUtil.createAlert
* ApiUtil.destroyAlert

## Gems/Libraries
