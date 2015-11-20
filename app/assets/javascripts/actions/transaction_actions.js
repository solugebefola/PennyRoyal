(function (root){
  TransactionApiActions = root.TransactionApiActions = {
    transactionsReceived: function (newTransactions) {
      AppDispatcher.dispatch({
        actionType: fluxConstants.TRANSACTIONS_RECEIVED,
        newTransactions: newTransactions
      });
    },

    singleTransactionReceived: function (newTransaction) {
      AppDispatcher.dispatch({
        actionType: fluxConstants.TRANSACTION_RECEIVED,
        newTransaction: newTransaction
      });
    }
  };
})(this);
