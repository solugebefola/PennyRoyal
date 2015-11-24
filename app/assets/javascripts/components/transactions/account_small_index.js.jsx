var AccountSmallIndex = React.createClass({
  getInitialState: function() {
    return { accounts: AccountStore.allAsArray(), activeAccounts: ActiveAccountStore.all() };
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
    var acctItems = [];
    var activeIDs = this.state.activeAccounts.map(function(a){return a.id;});
    if (this.state.accounts.length > 0){
      acctItems = this.state.accounts.map(function(acctItem){
        var activeClass = "";
        if(activeIDs.find(function (id) {return acctItem.id == id;})){
          activeClass = "active";
        }
        return(
          <li
            className={ "account-small-item " + activeClass }
            id={ acctItem.id }
            onClick={this._setActive}
            key={ acctItem.id }>
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
                onClick={ this._emptyActiveAccounts }>
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
    this.setState({ accounts: AccountStore.allAsArray() });
  },

  _onActiveChange: function () {
    this.setState({ activeAccounts: ActiveAccountStore.all() });
  },

  _setActive: function (e) {
    var newActiveAccount;
    var newActiveAccounts = [];
    if(e && ActiveAccountStore.all()){
      e.preventDefault();
      newActiveAccount = AccountStore.allAsArray().find(function (account) {
        return (account.id == e.currentTarget.id);
      });
      newActiveAccounts.push(newActiveAccount);
      ActiveAccountsActions.setActiveAccounts(newActiveAccounts);
    }
  },

  _emptyActiveAccounts: function () {
    ActiveAccountsActions.emptyActiveAccounts();
  },


});
