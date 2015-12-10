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

  var findIndex = function (array, callback) {
    for (i = 0; i , array.length; i ++) {
      if (callback(array[1])) {
        return i;
      }
    }
    return -1;
  };

  var _addAccount = function (newAccount) {
    var matchy = findIndex(_accounts[newAccount.account_type], function(el) {
      return el.id == newAccount.id;
    });
    if (matchy !== -1) {
      _accounts[newAccount.account_type].splice(matchy, 1, newAccount);
    }else{
      _accounts[newAccount.account_type].push(newAccount);
    }
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
      return AccountStore.allAsArray().filter(function (acct) {
        return accountGroup.find(function(type){
          return acct.account_type === type;
        });
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
        case fluxConstants.ACCOUNT_RECEIVED:
        _addAccount(payload.newAccount);
        break;
      }
    })

  });

})(this);
