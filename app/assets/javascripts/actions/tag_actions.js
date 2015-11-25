(function (root) {
  TagApiActions = root.TagApiActions = {
    tagReceived: function (newTag) {
      AppDispatcher.dispatch({
        actionType: fluxConstants.TAG_RECEIVED,
        newTag: newTag
      });
    },

    tagsReceived: function (tags) {
      AppDispatcher.dispatch({
        actionType: fluxConstants.TAGS_RECEIVED,
        tags: tags
      });
    }
  };
})(this);
