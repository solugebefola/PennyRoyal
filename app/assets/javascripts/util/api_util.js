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

    getInstitutions: function () {
      var insts;
      $.ajax({
        url: "api/institutions",
        method: "GET",
        success: function (institutions) {
          resetInstitutions(institutions);
        }
      });
    }
  };
})(this);
