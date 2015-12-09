var AccountPreForm = React.createClass({
  getInitialState: function() {
    return {
      institutions: InstitutionStore.all()
    };
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
          to={ "accounts/modal/new/" + inst.id + "?institution=" + inst.name }
          className="pre-form institution"
          key={ inst.id }>{ inst.name }</Link>
      );
    });
    return (
      <div>
        <header className="form">
          <h1>Choose your financial institution</h1>
            { insts }
          <Link className="back" to="/accounts">✖︎ Cancel</Link>
        </header>
      </div>
    );
  },

  _onChange: function () {
    this.setState({
      institutions: InstitutionStore.all()
    });
  },

});
