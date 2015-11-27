(function (root) {
  var _searchResults = [];
  var _resetSearchResults = function (newSearchResults) {
    _searchResults = newSearchResults;
  };
  var CHANGE_EVENT = "change_event";

  SearchResultStore = root.SearchResultStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _searchResults.slice(0);
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
        case fluxConstants.SEARCH_RESULTS_RECEIVED:
      }
    })

  });

})(this);
