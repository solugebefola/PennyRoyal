(function (root) {
  var _transactions = [];
  var CHANGE_EVENT = "change_event";
  var _resetTransactions = function (newTransactions) {
    _transactions = newTransactions;
    TransactionStore.changed();
  };

  var _takeSingleTransaction = function (newTransaction) {
    var transIndex = _transactions.findIndex(function (el) {
      return (el.id == newTransaction.id);
    });
    if (transIndex === -1) {
      _transactions.push(newTransaction);
    }else{
      _transactions.splice(transIndex, 1, newTransaction);
    }
    TransactionStore.changed();
  };

  _filterTransactionsOnAccounts = function (accounts) {
    var accountIDs = accounts.map(function(acct) { return acct.id; });
      return _transactions.filter(function (transaction) {
        return (accountIDs.includes(transaction.id));
      });
  };

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
          _resetTransactions(payload.newTransactions);
          break;
        case fluxConstants.SINGLE_TRANSACTION_RECEIVED:
          _takeSingleTransaction(payload.newTransaction);
          break;
        case fluxConstants.ACTIVE_ACCOUNT_RECEIVED:
          TransactionStore.filterTransactionsOnAccounts(payload.newAccounts);
          break;
      }
    })

  });

})(this);
