(function (root) {
  var _accountBases = [];
  var _resetAccountBases = function (newAccountBases) {
    _accountBases = newAccountBases;
  };
  var CHANGE_EVENT = "change_event";

  AccountBaseStore = root.AccountBaseStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _accountBases.slice(0);
    },

    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    changed: function() {
      this.emit(CHANGE_EVENT);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch (payload.actionType){
        case fluxConstants.ACCOUNT_BASES_RECEIVED:
          _resetAccountBases(payload.accountBases);
          break;
      }
    })

  });

})(this);
