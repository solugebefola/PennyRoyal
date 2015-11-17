var Institutions = React.createClass({

  render: function () {
    var insts = InstitutionStore.getInstitutions().map(function(inst){
      return <li>{inst.name}</li>;
    });
    return(
      <div>
        {insts}
      </div>
    );
  }
})
