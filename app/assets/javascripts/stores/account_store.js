(function (root) {
  var _accounts = {};
  accountConstants.accountType.map(function (type){
    _accounts[type] = [];
  });

  var _resetAccounts = function (newAccounts) {
    accountConstants.accountType.map(function (type){
      _accounts[type] = [];
    });
    newAccounts.forEach(function(account) {
      _accounts[account.account_type].push(account);
    });
    AccountStore.changed();
  };
  var CHANGE_EVENT = "change_event";

  AccountStore = root.AccountStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      var _accountsClone = {};
      for (var key in _accounts) {
        _accountsClone[key] = _accounts[key].slice(0);
      }
      return _accountsClone;
    },

    allAsArray: function () {
      var accts = [];
      for(var type in _accounts){
        accts = accts.concat(_accounts[type].slice(0));
      }
      return accts;
    },

    filterByGroup: function (accountGroup) {
      return AccountStore.allAsArray.filter(function (acct) {
        accountGroup.includes(acct.account_type);
      });
    },

    isEmpty: function () {
      var empty = true;
      for (var subArray in _accounts){
        if (subArray.length !== 0){ empty = false; }
      }
      return empty;
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
        _resetAccounts(payload.newAccounts);
        break;
      }
    })

  });

})(this);
