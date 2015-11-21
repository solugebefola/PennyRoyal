var AccountSmallIndex = React.createClass({
  getInitialState: function() {
    return { accounts: AccountStore.all(), activeAccount: ActiveAccountStore.one() };
  },
  componentWillMount: function() {

  },
  componentDidMount: function() {
    AccountStore.addChangeHandler(this._onChange);
    ActiveAccountStore.addChangeHandler(this._onActiveChange);
    ApiUtil.getAccounts();
  },
  componentWillUnmount: function() {
    AccountStore.removeChangeHandler(this._onChange);
    ActiveAccountStore.removeChangeHandler(this._onActiveChange);
  },
  render: function() {
    var accts = [];
    var acctItems;
    if (!AccountStore.isEmpty()){
      for(var type in this.state.accounts){
        accts = accts.concat(this.state.accounts[type].slice(0));
      }
      acctItems = accts.map(function(acctItem){
        var activeClass = "";
        var disabled = "";
        if(acctItem.id == this.state.activeAccount.id){
          activeClass = "active";
          disabled = "disabled";
        }
        return(
          <li
            className={ "account-small-item " + activeClass }
            id={ acctItem.id }
            onClick={this._setActive}
            key={ acctItem.id }
            disabled={disabled}>
            <AccountSmallIndexItem account={ acctItem }/>
          </li>
        );
      }.bind(this));
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
              <li
                className="account-small-item"
                onClick={ this._emptyActiveAccount }>
                  <p>All Accounts</p>
                  <p>{ acctItems.length } Accounts</p>
              </li>
              { acctItems }
            </ul>
          </li>
        </ul>
      </div>
    );
  },

  _onChange: function () {
    this.setState({ accounts: AccountStore.all() });
  },

  _onActiveChange: function () {
    this.setState({ activeAccount: ActiveAccountStore.one() });
  },

  _setActive: function (e) {
    var newActiveAccount;
    if(e && ActiveAccountStore.one()){
      e.preventDefault();
      if (e.currentTarget.id !== ActiveAccountStore.one().id) {
        newActiveAccount = AccountStore.allAsArray().find(function (account) {
          return (account.id == e.currentTarget.id);
        });
      }
      ActiveAccountActions.setActiveAccount(newActiveAccount);
    }
  },

  _emptyActiveAccount: function () {
    debugger
    ActiveAccountActions.emptyActiveAccount();
  }
});
