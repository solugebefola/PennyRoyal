(function (root) {
  var _activeCategory = {id: 0};
  var _resetActiveCategory = function (newActiveCategory) {
    _activeCategory = newActiveCategory;
    ActiveCategoryStore.changed();
  };
  var CHANGE_EVENT = "change_event";

  ActiveCategoryStore = root.ActiveCategoryStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return $.extend({}, _activeCategory);
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
        case  fluxConstants.RECEIVED_ACTIVE_CATEGORY:
          _resetActiveCategory(payload.newActiveCategory);
          break;
      }
    })

  });

})(this);
