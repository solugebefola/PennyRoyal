(function (root) {
  var _user = {};
  var CHANGE_EVENT = "change_event";

  UserStore = root.UserStore = $.extend({}, EventEmitter.prototype, {

    one: function () {
      var userClone = $.extend({}, _user);
      return userClone;
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
        case fluxConstants.USER_RECEIVED:
          _user = payload.user;
          UserStore.changed();
      }
    })

  });

})(this);
