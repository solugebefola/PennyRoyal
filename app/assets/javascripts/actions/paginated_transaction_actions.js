(function (root) {
  PaginatedTransactionActions = root.PaginatedTransactionActions = {
    paginationParametersReceived: function (newPaginationParameters) {
      AppDispatcher.dispatch({
        actionType: fluxConstants.PAGINATION_PARAMETERS_RECEIVED,
        newPaginationParameters: newPaginationParameters
      });
    }
  };
})(this);
