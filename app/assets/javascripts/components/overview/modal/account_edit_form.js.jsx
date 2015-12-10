var AccountEditForm = React.createClass({
  getInitialState: function() {
    return {
      username: "",
      password: "",
      name: "",
      accountType: this.props.account.account_type,
      id: this.props.account.id
    };
  },

  render: function() {
    return (
      <div>
        <main className="edit main group">
          <form onSubmit={ this.submitChangeHandler } action="">
            <label className="account-form input-label">Account Name
            <input
              className="account-form edit input"
              type="text"
              name="name"
              onChange={ this.inputChangeHandler }
              value={ this.state.name } />
            </label>
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
              type="text"
              name="password"
              onChange={ this.inputChangeHandler }
              value={ this.state.password }/>
            </label>
            <button
              className="account-form-button submit"
              type="submit">Update Account
            </button>
            <button
              className="account-form-button delete"
              type="delete"
              onClick={ this.deleteButtonChangeHandler }>Delete Account
            </button>
          </form>
          <div className="account-form sidebar">
              <h1>{ this.props.account.name }</h1>
          </div>
        </main>
      </div>
    );
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

  deleteButtonChangeHandler: function (e) {
    e.preventDefault();
    if(this.props.account.id){
      AccountApiActions.deleteAccount({ id: this.props.account.id });
    }
  }
});
