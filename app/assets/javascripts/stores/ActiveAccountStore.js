(function (root) {
  var _activeAccounts = [];
  var _resetActiveAccounts = function (newActiveAccounts) {
    _activeAccounts = newActiveAccounts;
    ActiveAccountStore.changed();
  };
  var CHANGE_EVENT = "change_event";

  ActiveAccountStore = root.ActiveAccountStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _activeAccounts.slice(0);
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
        case fluxConstants.ACTIVE_ACCOUNTS_RECEIVED:
          _resetActiveAccounts();
          break;
      }
    })

  });

})(this);
