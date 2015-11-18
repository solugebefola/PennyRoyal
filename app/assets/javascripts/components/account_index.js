var AccountIndex = React.createClass({

  getInitialState: function () {
    return { accounts: AccountStore.all() };
  },

  componentWillMount: function () {
    AccountStore.addChangeHandler(this._onChange);
  },

  _onChange: function () {
    this.setState({ accounts: AccountStore.all() });
  },

  render: function() {
    var indexes = [];
    for (var accountKey in this.state.accounts) {
      indexes.push(
        <li>
          <AccountTypeIndex
            accountType={accountKey}
              accounts={this.state.accounts[accountKey]} />
        </li>
      );
    }
    return (
      <div>
        <h1>These are the indexes</h1>
        <ul>
          {indexes}
        </ul>
      </div>
    );
  }
});
