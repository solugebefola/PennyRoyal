(function (root){
  InstitutionApiActions = root.InstitutionApiActions = {
    institutionsReceived: function (newInstitutions) {
      AppDispatcher.dispatch({
        actionType: fluxConstants.INSTITUTIONS_RECEIVED,
        newInstitutions: newInstitutions
      });
    },

    singleInstitutionReceived: function (newInstitution) {
      AppDispatcher.dispatch({
        actionType: fluxConstants.INSTITUTION_RECEIVED,
        newInstitution: newInstitution
      });
    }
  };
})(this);
