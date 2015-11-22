var AccountEditForm = React.createClass({
  getInitialState: function() {
    return {
      username: "",
      password: "",
      id: this.props.account_id,
      accountType: this.props.account_type
    };
  },
  componentWillMount: function() {

  },
  componentDidMount: function() {

  },
  componentWillUnmount: function() {

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
    ApiUtil.editAccount(this.state);
  },

  selectChangeHandler: function (e) {
    this.setState({ accountType: e.target.value });
  },

  render: function() {
    var accountTypes = accountConstants.accountType.map(function (type) {
      return <option key={ type } value={ type }>{ type }</option>;
    });

    return (
      <div>
        <form onSubmit={this.submitChangeHandler} action="">
          <label className="account-form input-label">Account Name
          <input
            className="account-form edit input"
            type="text"
            name="name"
            onChange={this.inputChangeHandler}
            value={this.state.username} />
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
          <label className="account-form input-label">Account Type
            <select
              name="account_type"
              onChange={this.selectChangeHandler}>
              { accountTypes }
            </select>
          </label>
          <button
            className="account-edit-submit"
            type="submit">Update Account
          </button>
        </form>
      </div>
    );
  }
});
