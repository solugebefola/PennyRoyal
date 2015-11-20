(function (root){
  ActiveAccountActions = root.ActiveAccountActions = {
    setActiveAccount: function (newAccount) {
      AppDispatcher.dispatch({
        actionType: fluxConstants.ACTIVE_ACCOUNT_RECEIVED,
        newActiveAccount: newAccount
      });
    }
  };
})(this);
