var AccountNewForm = React.createClass({
  getInitialState: function() {
    return {
      username: "",
      user_password: "",
      account_type: "",
      accountBases: AccountBaseStore.filterByInstitutionID(this.props.params.inst_id),
      account_name: ""
    };
  },

  componentWillMount: function() {
  },

  componentDidMount: function() {
    AccountBaseStore.addChangeHandler(this._onChange);
    ApiUtil.getAccountBases();
  },

  componentWillUnmount: function() {
    AccountBaseStore.removeChangeHandler(this._onChange);
  },

  render: function() {
    var accountOptions = this.state.accountBases.map(function (base) {
      return <option key={ base.id } value={ base.account_type }>{ base.name }</option>;
    });
    return (
      <div>
        <section className="modal">
          <header className="account-form">
            <h1 className="institution">
              { this.props.location.query.institution }
            </h1>
            <h2 className="account-base">
              { this.state.account_name }
            </h2>
          </header>
          <form onSubmit={this.submitChangeHandler} action="">
            <label className="account-form input-label">Username
            <input
              className="account-form edit input"
              type="text"
              name="username"
              onChange={ this.inputChangeHandler }
              value={ this.state.username } />
            </label>
            <label className="account-form input-label">Password
            <input
              className="account-form edit input"
              type="password"
              name="user_password"
              onChange={ this.inputChangeHandler }
              value={ this.state.password }/>
            </label>
            <label className="account-form input-label">Account type
              <select
                className="account-form input"
                onChange={ this.inputChangeHandler }
                name="account_type">

                <option value="">Select a type</option>
                { accountOptions }
              </select>
            </label>
            <button
              className="account-form-button submit"
              type="submit">Add Account
            </button>
          </form>
          <div className="back">
            <Link to="/account/pre" className="backcarrot">Go Back</Link>
            <Link to="/accounts">✖︎ Cancel</Link>
          </div>
        </section>
      </div>
    );
  },

  _onChange: function () {
    this.setState({
      accountBases: AccountBaseStore.filterByInstitutionID(this.props.params.inst_id)
    });
  },


  inputChangeHandler: function (e) {
    e.preventDefault();
    var newState = {};
    if (e.target.name === "account_type"){
      var name = e.target.selectedOptions[0].text;
      newState.account_name = name;
    }
    propKey = e.target.name;
    newState[propKey] = e.target.value;
    this.setState(newState);
  },

  submitChangeHandler: function (e) {
    e.preventDefault();
    var accountProps = {};
    accountProps = $.extend({}, this.state);
    accountProps.name = this.state.account_name;
    accountProps.institution_id = this.props.params.inst_id;
    accountProps.balance = Math.floor(Math.random()*4000000)/100;
    if (accountProps.account_type === "loan"){ accountProps.balance *= -1; }
    ApiUtil.createAccount(accountProps);
  },
});
