(function (root) {
  AccountBaseApiActions = root.AccountBaseApiActions = {
    accountBasesReceived: function (accountBases) {
      AppDispatcher.dispatch({
        actionType: fluxConstants.ACCOUNT_BASES_RECEIVED,
        accountBases: accountBases
      });
    }
  };
})(this);
