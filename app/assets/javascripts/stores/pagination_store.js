(function (root) {
  var _pagination = {
    per: 25,
    page: 1,
    total_count: 0
  };

  var _resetPagination = function (transactions) {
    _pagination = {
      per_number: transactions.per,
      page: transactions.page,
      total_count: transactions.total_count
    };
    PaginationStore.changed();
  };
  var CHANGE_EVENT = "change_event";

  PaginationStore = root.PaginationStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _pagination.slice(0);
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
        case fluxConstants.TRANSACTIONS_RECEIVED:
          _resetPagination(payload.transactions);
          break;
      }
    })

  })

})(this);
