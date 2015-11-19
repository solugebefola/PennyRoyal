var AccountNewForm = React.createClass({
  getInitialState: function() {
    return {
      username: "",
      password: "",
      accountType: "",
      institution: {},
      institutions: InstitutionStore.all()
    };
  },

  componentWillMount: function() {
  },

  componentDidMount: function() {
    InstitutionStore.addChangeHandler(this._onChange);
  },

  componentWillUnmount: function() {

  },

  render: function() {
    var instOptions = this.state.institutions.map(function (inst) {
      return <option key={inst.id} value={inst.id}>{inst.name}</option>;
    });

    return (
      <div>
        <form onSubmit={this.submitChangeHandler} action="">
          <label>Institution
            <select name="institution">
              {instOptions}
            </select>
          </label>
          <label className="account-form input-label">Username
          <input
            className="account-form edit input"
            type="text"
            name="username"
            onChange={this.inputChangeHandler}
            value={this.state.username} />
          </label>
          <label className="account-form input-label">Password
          <input
            className="account-form edit input"
            type="password"
            name="password"
            onChange={this.inputChangeHandler}
            value={this.state.password}/>
          </label>
          <label>Account type
            <select name="account_type">
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
              className="account-edit-submit"
              type="submit">Add Account
            </button>
        </form>
      </div>
    );
  },

  _onChange: function () {
    this.setState({ institutions: InstitutionStore.all() });
  },

  inputChangeHandler: function (e) {
    e.preventDefault();
    newState = {};
    propKey = e.target.name;
    newState[propKey] = e.target.value;
    this.setState(newState);
  },

  submitChangeHandler: function (e) {
    e.preventDefault();
    var accountProps = {};
    var inst = this.state.institutions.find(function(institution) {
      return (institution.id === parseInt(e.target.institution.value));
    });
    accountProps.name = inst.name + " " + e.target.account_type.value;
    accountProps.institution_id = e.target.institution.value;
    accountProps.username = e.target.username.value;
    accountProps.user_password = e.target.password.value;
    accountProps.account_type = e.target.account_type.value;
    accountProps.balance = 1.00;
    ApiUtil.createAccount(accountProps);
  }
});
