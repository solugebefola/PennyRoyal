var UserEditForm = React.createClass({
  getInitialState: function() {
    return UserStore.one();
  },
  componentWillMount: function() {
  },

  componentDidMount: function() {
    UserStore.addChangeHandler(this._onChange);
  },

  componentWillUnmount: function() {
    UserStore.removeChangeHandler(this._onChange);
  },

  render: function() {
    return (
      <div>
        <section className="user modal">
          <h1>Set up your User Profile</h1>
          <form onSubmit={this.submitChangeHandler} action="">
            <label className="input-label">First Name
            <input
              className="account-form edit input"
              type="text"
              name="fname"
              onChange={ this.inputChangeHandler }
              value={ this.state.fname } />
            </label>
            <label className="account-form input-label">Password
            <input
              className="account-form edit input"
              type="password"
              name="user_password"
              onChange={ this.inputChangeHandler }
              value={ this.state.password }/>
            </label>
          </form>
        </section>
      </div>
    );
  }
});
