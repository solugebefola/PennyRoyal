var AccountEditForm = React.createClass({
  getInitialState: function() {
    return {username: "", password: ""};
  },
  componentWillMount: function() {

  },
  componentDidMount: function() {

  },
  componentWillUnmount: function() {

  },

  inputChangeHandler: function (e) {
    newState = {};
    propKey = e.target.name;
    newState[propKey] = e.target.value;
    this.setState(newState);
  },

  submitChangeHandler: function () {

  },

  render: function() {
    return (
      <div>
        <form className="account-form edit">
          <input
            className="account-form edit input"
            type="text"
            name="username"
            onChange={inputChangeHandler}
            value={this.state.username} />
          <input
            className="account-form edit input"
            type="text"
            name="password"
            onChange={inputChangeHandler}
            value={this.state.password}/>
          <button
            type="submit"
            onSubmit={submitChangeHandler}>Add Account</button>
        </form>

      </div>
    );
  }
});
