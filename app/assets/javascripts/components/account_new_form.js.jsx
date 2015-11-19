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
      return <option value={inst.id}>{inst.name}</option>;
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
            type="text"
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
  }
});
