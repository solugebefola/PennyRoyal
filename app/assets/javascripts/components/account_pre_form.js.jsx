var AccountPreForm = React.createClass({
  getInitialState: function() {
    return {
      institutions: InstitutionStore.all(),
      accountBases: AccountBaseStore.all()
    };
  },
  componentWillMount: function() {

  },
  componentDidMount: function() {
    InstitutionStore.addChangeHandler(this._onChange);
    AccountBaseStore.addChangeHandler(this._onChange);
    ApiUtil.getInstitutions();
  },
  componentWillUnmount: function() {

  },
  render: function() {
    var insts = this.state.institutions.map(function (inst) {
      return (
        <Link
          to={ "accountnew/" + inst.id }
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
      institutions: InstitutionStore.all(),
      accountBases: AccountBaseStore.all()
    });
  },

  chooseInstitution: function(id) {

  }
});
