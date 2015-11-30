var AccountSummary = React.createClass({

  getInitialState: function () {
    return {
      numAccounts: AccountStore.allAsArray().length,
      numCategories: CategoryStore.all().length
    };
  },

  componentDidMount: function () {
    AccountStore.addChangeHandler(this._onChange);
    CategoryStore.addChangeHandler(this._onChange);
  },

  componentWillUnmount: function () {
    AccountStore.removeChangeHandler(this._onChange);
    CategoryStore.removeChangeHandler(this._onChange);
  },

  render: function() {
    return (
      <div>
        <header className="form">
          <h1>You have { this.state.numAccounts } Accounts</h1>
          <h1>You have { this.state.numCategories } Categories</h1>
        </header>
      </div>
    );
  },

  _onChange: function () {
    this.setState({
      numAccounts: AccountStore.allAsArray().length,
      numCategories: CategoryStore.all().length
    });
  }
});
