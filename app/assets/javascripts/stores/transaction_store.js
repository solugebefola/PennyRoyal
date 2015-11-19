(function (root) {
  var _transactions = [];
  var _resetTransactions = function (newTransactions) {
    _transactions = newTransactions;
    TransactionStore.changed();
  };
  var CHANGE_EVENT = "change_event";

  TransactionStore = root.TransactionStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _transactions.slice(0);
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
          _resetTransactions(payload.transactions);
          break;
      }
    })

  });

})(this);
