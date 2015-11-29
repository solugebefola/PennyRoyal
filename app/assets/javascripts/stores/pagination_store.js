(function (root) {
  var _pagination = {
    per: 25,
    page: 1,
    total_count: 0
  };

  var _resetPagination = function (newTransactions) {
    _pagination = {
      per_number: newTransactions.per,
      page: newTransactions.page,
      total_count: newTransactions.total_count
    };
    PaginationStore.changed();
  };
  var CHANGE_EVENT = "change_event";

  PaginationStore = root.PaginationStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return $.extend({},_pagination);
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
          _resetPagination(payload.newTransactions);
          break;
      }
    })

  });

})(this);
