var AccountNewForm = React.createClass({
  getInitialState: function() {
    return {
      username: "",
      user_password: "",
      accountType: "",
      accountBases: AccountBaseStore.filterByInstitutionID(this.props.params.inst_id),
      accountName: ""
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
    return (
      <div>
        <h1 className="account-form institution">
          { this.props.location.query.institution }
        </h1>
        <h2>
          { this.state.accountName }
        </h2>
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
          <label>Account type
            <select
              className="account-form input"
              onChange={ this.inputChangeHandler }
              name="account_type">

              <option value="">Select a type</option>
              <option value="savings">Savings</option>
              <option value="checking">Checking</option>
              <option value="credit_card">Credit Card</option>
              <option value="loan">Loan</option>
              <option value="investment">Investment</option>
              <option value="cash">Cash</option>
            </select>
          </label>
          <button
            className="account-form-button submit"
            type="submit">Add Account
          </button>
        </form>
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
      this.setState(
        {accountName: AccountBaseStore.filterByAccountType(e.target.name)}
      );
    }
    propKey = e.target.name;
    newState[propKey] = e.target.value;
    this.setState(newState);
  },

  submitChangeHandler: function (e) {
    e.preventDefault();
    var accountProps = {};
    var inst = this.state.institutions.find(function(institution) {
      return (institution.id === this.state.institution_id);
    });
    accountProps.name = this.state.accountName;
    accountProps.institution_id = this.props.params.inst_id;
    accountProps.username = this.state.username.value;
    accountProps.user_password = this.state.user_password.value;
    accountProps.account_type = this.state.account_type.value;
    accountProps.balance = Math.floor(Math.round()*4000000)/100;//Addnote: change this to random value?
    ApiUtil.createAccount(accountProps);
  },
});
