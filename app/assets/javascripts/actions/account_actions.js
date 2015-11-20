(function (root){
  AccountApiActions = root.AccountApiActions = {
    accountsReceived: function (newAccounts) {
      AppDispatcher.dispatch({
        actionType: fluxConstants.ACCOUNTS_RECEIVED,
        newAccounts: newAccounts
      });
    },

    singleAccountReceived: function (newAccount) {
      AppDispatcher.dispatch({
        actionType: fluxConstants.ACCOUNT_RECEIVED,
        newAccount: newAccount
      });
    }
  };
})(this);
