(function (root) {
  var _activeTransaction = {id: 0};
  var _resetActiveTransaction = function (newActiveTransaction) {
    _activeTransaction = newActiveTransaction;
    ActiveTransactionStore.changed();
  };
  var CHANGE_EVENT = "change_event";

  ActiveTransactionStore = root.ActiveTransactionStore = $.extend({}, EventEmitter.prototype, {

    one: function () {
      return $.extend({}, _activeTransaction);
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
        case fluxConstants.ACTIVE_TRANSACTION_RECEIVED:
          _resetActiveTransaction(payload.activeTransaction);
          break;
      }
    })

  });

})(this);
