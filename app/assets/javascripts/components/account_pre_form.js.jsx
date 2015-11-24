var AccountPreForm = React.createClass({
  getInitialState: function() {
    return {
      institutions: InstitutionStore.all()
    };
  },

  componentWillMount: function() {

  },

  componentDidMount: function() {
    InstitutionStore.addChangeHandler(this._onChange);
    ApiUtil.getInstitutions();
  },

  componentWillUnmount: function() {
    InstitutionStore.removeChangeHandler(this._onChange);
  },
  
  render: function() {
    var insts = this.state.institutions.map(function (inst) {
      return (
        <Link
          to={ "account/new/" + inst.id + "?institution=" + inst.name }
          className="account-pre-form institution"
          key={ inst.id }>{ inst.name }</Link>
      );
    });
    return (
      <div>
        { insts }
      </div>
    );
  },

  _onChange: function () {
    this.setState({
      institutions: InstitutionStore.all()
    });
  },

});
