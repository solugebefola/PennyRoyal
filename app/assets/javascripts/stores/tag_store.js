(function (root) {
  var _tags = [];
  var CHANGE_EVENT = "change_event";

  TagStore = root.TagStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _tags.slice(0);
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
        case fluxConstants.TAG_RECEIVED:
          _tags.push(payload.newTag);
          TagStore.changed();
          break;
        case fluxConstants.TAGS_RECEIVED:
          _tags = payload.tags;
          TagStore.changed();
          break;
      }
    })

  });

})(this);
