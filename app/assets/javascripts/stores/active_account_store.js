(function (root) {
  var _activeAccount = { id: 0 };
  var _resetActiveAccount = function (newActiveAccount) {
    _activeAccount = newActiveAccount;
    ActiveAccountStore.changed();
  };
  var CHANGE_EVENT = "change_event";

  ActiveAccountStore = root.ActiveAccountStore = $.extend({}, EventEmitter.prototype, {

    one: function () {
      if (_activeAccount) {
        return ($.extend({}, _activeAccount));
      }
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
        case fluxConstants.ACTIVE_ACCOUNT_RECEIVED:
          _resetActiveAccount(payload.newActiveAccount);
          break;
      }
    })

  });

})(this);
