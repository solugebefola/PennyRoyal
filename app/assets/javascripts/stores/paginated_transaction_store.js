(function (root) {
  var _paginatedTransactions = {
    per: 25,
    page: 1,
    transactions: []
  };

  var _resetPaginatedTransactions = function (newPaginatedTransactions) {
    _paginatedTransactions.transactions = TransactionStore.filterTransactionsOnAccounts(ActiveAccountStore.all());
    PaginatedTransactionStore.changed();
  };

  var _resetPageOrPer = function (newPaginationParameters) {
    $.extend(_paginatedTransactions, newPaginationParameters);
    PaginatedTransactionStore.changed();
  };

  var CHANGE_EVENT = "change_event";

  PaginatedTransactionStore = root.PaginatedTransactionStore = $.extend({}, EventEmitter.prototype, {

    transactions: function () {
      var per = _paginatedTransactions.per;
      var page = _paginatedTransactions.page;
      return _paginatedTransactions
        .transactions.slice(per * (page - 1), per * (page - 1) + per);
    },

    page: function () {
      return _paginatedTransactions.page;
    },

    per: function () {
      return _paginatedTransactions.per;
    },

    total_count: function () {
      return _paginatedTransactions.transactions.length;
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
          AppDispatcher.waitFor([TransactionStore.dispatcherID]);
          _resetPaginatedTransactions();
          break;
        case fluxConstants.ACTIVE_ACCOUNTS_RECEIVED:
        case fluxConstants.ACTIVE_ACCOUNTS_EMPTY:
          AppDispatcher.waitFor([ActiveAccountStore.dispatcherID]);
          _resetPaginatedTransactions();
          break;
        case fluxConstants.PAGINATION_PARAMETERS_RECEIVED:
          _resetPageOrPer(payload.newPaginationParameters);
          break;
      }
    })

  });

})(this);
