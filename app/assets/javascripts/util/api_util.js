(function (root) {

  var ApiUtil = root.ApiUtil = {
    getAccounts: function () {
      $.ajax({
        url: "api/accounts",
        method: "GET",
        success: function (accounts) {
          AccountApiActions.accountsReceived(accounts);
        }
      });
    },

    editAccount: function(params) {
      $.ajax({
        url: "api/account/" + params[id],
        method: "PATCH",
        success: function (account) {
          AccountApiActions.singleAccountReceived(account);

        }
      });
    },

    deleteAccount: function(params) {
      $.ajax({
        url: "api/account/" + params[id],
        method: "DELETE",
        success: function (accounts) {
          AccountApiActions.accountsReceived(accounts);
        }
      });
    },

    createAccount: function(params) {
      $.ajax({
        url: "api/accounts",
        method: "POST",
        data: {account: params},
        success: function (account) {
          AccountApiActions.singleAccountReceived(account);
        }
      });
    },

    getInstitutions: function () {
      $.ajax({
        url: "api/institutions",
        method: "GET",
        success: function (institutions) {
          InstitutionApiActions.institutionsReceived(institutions);
        }
      });
    },

    getTransactions: function () {
      $.ajax({
        url: "api/transactions",
        method: "GET",
        success: function (transactions) {
          TransactionApiActions.transactionsReceived(transactions);
        }
      });
    },

    createTransaction: function (transaction) {
      $.ajax({
        url: "api/transactions/",
        method: "POST",
        data: { transaction: transaction },
        success: function (transaction) {
          TransactionApiActions.singleTransactionReceived(transaction);
        }
      });
    },

    editTransaction: function (transaction) {
      $.ajax({
        url: "api/transactions/" + transaction.id,
        method: "PATCH",
        data: {transaction: transaction},
        success: function (transaction) {
          TransactionApiActions.singleTransactionReceived(transaction);
        }
      });
    },

    getAccountBases: function () {
      $.ajax({
        url: "api/account_bases/",
        method: "GET",
        success: function (accountBases) {
          AccountBaseApiActions.accountBasesReceived(accountBases);
        }
      });
    },
    getCategories: function () {
      $.ajax({
        url: "api/categories/",
        method: "GET",
        success: function (categories) {
          CategoryApiActions.categoriesReceived(categories);
        }
      });
    },
    getCategory: function (id) {
      $.ajax({
        url: "api/category/" + id,
        method: "GET",
        success: function (category) {
          CategoryApiActions.categoryReceived(category);
        }
      });
    }

  };
})(this);
