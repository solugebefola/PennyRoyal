(function (root) {
  var _accounts = [];
  var _resetAccounts = function (newAccounts) {
    _accounts = newAccounts;
  };
  var CHANGE_EVENT = "change_event";

  AccountStore = root.AccountStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _accounts.slice(0);
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
        case fluxConstants.ACCOUNTS_RECEIVED:
        _resetAccounts(payload.accounts);
        break;
      }
    })

  });

})(this);
