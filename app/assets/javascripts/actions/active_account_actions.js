(function (root){
  ActiveAccountsActions = root.ActiveAccountsActions = {
    setActiveAccounts: function (newAccounts) {
      AppDispatcher.dispatch({
        actionType: fluxConstants.ACTIVE_ACCOUNTS_RECEIVED,
        newActiveAccounts: newAccounts
      });
    },

    emptyActiveAccounts: function () {
      AppDispatcher.dispatch({
        actionType: fluxConstants.ACTIVE_ACCOUNTS_EMPTY
      });
    }
  };
})(this);
