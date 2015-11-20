var AccountSmallIndex = React.createClass({
  getInitialState: function() {
    return { accounts: AccountStore.all() };
  },
  componentWillMount: function() {

  },
  componentDidMount: function() {
    AccountStore.addChangeHandler(this._onChange);
    ApiUtil.getAccounts();
  },
  componentWillUnmount: function() {

  },
  render: function() {
    var accts = [];
    var acctItems;
    if (!AccountStore.isEmpty()){
      for(var type in this.state.accounts){
        accts = accts.concat(this.state.accounts[type].slice(0));
      }
      acctItems = accts.map(function(acctItem){
        return(
          <li className="account-small-item" key={acctItem.id}>
            <AccountSmallIndexItem account={acctItem}/>
          </li>
        );

      });
    }

    return(
      <div>
        <ul className="account-small-index">
          <li>
            <p>Type</p>
          </li>
          <li>
            <AccountTypeNavbar />
          </li>
          <li>
            <p>Accounts</p>
          </li>
          <li>
            <ul>
            <li>
              
            </li>
              {acctItems}
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
