(function (root) {

  var ApiUtil = root.ApiUtil = {
    getAccounts: function () {
      $.ajax({
        url: "api/accounts",
        method: "GET",
        success: function (accounts) {
          AppDispatcher.dispatch({
            actionType: fluxConstants.ACCOUNTS_RECEIVED,
            accounts: accounts
          });
        }
      });
    },

    editAccount: function(params) {
      $.ajax({
        url: "api/account/" + params[id],
        method: "PATCH",
        success: function (account) {
          AppDispatcher.dispatch({
            actionType: fluxConstants.ACCOUNT_RECEIVED,
            account: account
          });
        }
      });
    },

    createAccount: function(params) {
      $.ajax({
        url: "api/accounts",
        method: "POST",
        data: "json",
        dataType: "json",
        success: function (account) {
          AppDispatcher.dispatch({
            actionType: fluxConstants.ACCOUNT_RECEIVED,
            account: account
          });
        }
      });
    },

    getInstitutions: function () {
      $.ajax({
        url: "api/institutions",
        method: "GET",
        success: function (institutions) {
          AppDispatcher.dispatch({
            actionType: fluxConstants.INSTITUTIONS_RECEIVED,
            institutions: institutions
          });
        }
      });
    }
  };
})(this);
