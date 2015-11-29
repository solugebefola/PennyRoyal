(function (root) {
  var _paginatedTransactions = {
    per: 25,
    page: 1,
    total_count: 0,
    transactions: []
  };

  var _resetPaginatedTransactions = function (newPaginatedTransactions) {
    _pagination = $.extend({}, newPaginatedTransactions);
    PaginatedTransactionStore.changed();
  };
  
  var CHANGE_EVENT = "change_event";

  PaginatedTransactionStore = root.PaginatedTransactionStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return $.extend({}, _pagination);
    },

    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    changed: function() {
      this.emit(CHANGE_EVENT);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch (payload.actionType){
        case fluxConstants.PAGINATED_TRANSACTIONS_RECEIVED:
          _resetPaginatedTransactions(payload.newPaginatedTransactions);
          break;
      }
    })

  });

})(this);
