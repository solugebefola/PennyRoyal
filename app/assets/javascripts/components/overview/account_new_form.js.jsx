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
        <Link to="/account/pre" className="back backcarrot">Go Back</Link>
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
    accountProps.name = this.state.account_name;
    accountProps.institution_id = this.props.params.inst_id;
    accountProps.username = this.state.username;
    accountProps.user_password = this.state.user_password;
    accountProps.account_type = this.state.account_type;
    accountProps.balance = Math.floor(Math.random()*4000000)/100;
    if (accountProps.account_type === "loan"){ accountProps.balance *= -1; }
    ApiUtil.createAccount(accountProps);
  },
});
