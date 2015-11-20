(function (root) {
  ActiveTransactionActions = root.ActiveTransactionActions = {
    getActiveTransaction: function(newActiveTransaction) {
      AppDispatcher.dispatch({
        actionType: fluxConstants.ACTIVE_TRANSACTION_RECEIVED,
        newActiveTransaction: newActiveTransaction
      });
    }
  };
})(this);
