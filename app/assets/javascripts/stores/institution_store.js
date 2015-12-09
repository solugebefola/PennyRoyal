(function (root) {
  var _institutions = [];
  var _resetInstitutions = function (newinstitutions) {
    _institutions = newinstitutions;
    InstitutionStore.changed();
  };
  var CHANGE_EVENT = "change_event";

  InstitutionStore = root.InstitutionStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _institutions.slice(0);
    },

    oneById: function (id) {
      return _institutions.find(function (inst) {
        return inst.id === parseInt(id);
      });
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
        case fluxConstants.INSTITUTIONS_RECEIVED:
          _resetInstitutions(payload.newInstitutions);
          break;
      }
    })

  });

})(this);
