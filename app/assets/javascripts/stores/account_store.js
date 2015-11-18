(function (root) {
  var _accounts = {};
  accountConstants.accountType.map(function (type){
    _accounts[type] = [];
  });
  var _resetAccounts = function (newAccounts) {
    newAccounts.forEach(function(account) {
      _accounts[account.type].push(account);
      console.log(_accounts[account.type]);
    });
  };
  var CHANGE_EVENT = "change_event";

  AccountStore = root.AccountStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      var _accountsClone = {};
      for (var key in _accounts) {
        _accountsClone[key] = _accounts[key].slice(0);
        console.log(_accountsClone[key]);
      }
      return _accountsClone;
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
