(function (root) {
  CategoryApiActions = root.CategoryApiActions = {
    categoriesReceived: function (cats) {
      AppDispatcher.dispatch({
        actionType: fluxConstants.CATEGORIES_RECEIVED,
        newCategories: cats
      });
    },

    categoryReceived: function (cat) {
      AppDispatcher.dispatch({
        actionType: fluxConstants.CATEGORY_RECEIVED,
        newCategory: cat
      });
    }
  };
})(this);
