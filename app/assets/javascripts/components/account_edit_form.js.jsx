var AccountEditForm = React.createClass({
  getInitialState: function() {
    return {username: "", password: "", id: this.props.account_id};
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

  render: function() {
    return (
      <div>
        <form onSubmit={this.submitChangeHandler} action="">
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
          <button
            className="account-edit-submit"
            type="submit">Add Account
          </button>
        </form>
      </div>
    );
  }
});
