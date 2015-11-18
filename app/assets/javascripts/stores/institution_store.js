(function (root) {
  var _institutions = [];
  var resetInstitutions = function (institutions) {
    _institutions = institutions;
  };

  InstitutionStore = root.InstitutionStore = {
    getInstitutions: function () {
      $.ajax({
        url: "api/institutions",
        method: "GET",
        success: function (institutions) {
          debugger
          return institutions;
        }
      });
    }
  };
})(this);
