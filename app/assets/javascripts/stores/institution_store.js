(function (root) {
  var _institutions = [];
  var _resetInstitutions = function (newinstitutions) {
    _institutions = newinstitutions;
  };
  var CHANGE_EVENT = "change_event";

  InstitutionStore = root.InstitutionStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _institutions.slice(0);
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

    // dispatcherID: AppDispatcher.register(function(payload) {
    //   switch (payload.actionType){
    //     case:
    //   }
    // })

  })

})(this);
