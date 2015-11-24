(function (root) {
  var _categories = [];
  var _resetCategories = function (newCategories) {
    _categories = newCategories;
    CategoryStore.changed();
  };

  var _resetSingleCategory = function (newCategory) {
    _categories = _categories.filter(function(cat){
      return (cat.id !== newCategory.id);
    });
    _categories.push(newCategory);
    CategoryStore.changed();
  };

  var CHANGE_EVENT = "change_event";

  CategoryStore = root.CategoryStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _categories.slice(0);
    },

    single: function (categoryOrID) {
      if (isNaN(categoryOrID)){
        return _categories.find(function (cat) {
          return cat.name === categoryOrID;
        });
      }else{
        return _categories.find(function (cat) {
          return cat.id == categoryOrID;
        });
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
        case fluxConstants.CATEGORIES_RECEIVED:
          _resetCategories(payload.newCategories);
          break;
        case fluxConstants.CATEGORY_RECEIVED:
          _resetSingleCategory(payload.newCategory);
      }
    })

  });

})(this);
