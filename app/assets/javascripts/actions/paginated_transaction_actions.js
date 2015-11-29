(function (root) {
  PaginatedTransactionApiActions = root.PaginatedTransactionApiActions = {
    paginatedTransactionsReceived: function (newPaginatedTransactions) {
      AppDispatcher.dispatch({
        actionType: fluxConstants.PAGINATED_TRANSACTIONS_RECEIVED,
        newPaginatedTransactions: newPaginatedTransactions
      });
    }
  };
})(this);
