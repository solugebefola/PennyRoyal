var AccountSmallIndex = React.createClass({
  getInitialState: function() {
    return { accounts: AccountStore.all() };
  },
  componentWillMount: function() {

  },
  componentDidMount: function() {
    AccountStore.addChangeHandler(this._onChange);
  },
  componentWillUnmount: function() {

  },
  render: function() {
    accts = this.state.accounts.map(function (account){
      return <li key={account.id}><AccountSmallIndexItem account={account}/></li>;
    });
    return(
      <div>
        <ul>
          <li>
            <h1>Type</h1>
          </li>
          <li>
            <AccountTypeNavbar />
          </li>
          <li>
            <h1>Accounts</h1>
          </li>
          <li>
            <ul>
              {accts}
            </ul>
          </li>
        </ul>
      </div>
    );
  },

  _onChange: function () {
    this.setState({ accounts: AccountStore.all() });
  }
});
