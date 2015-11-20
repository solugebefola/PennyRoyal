var AccountIndex = React.createClass({

  getInitialState: function () {
    return { accounts: AccountStore.all() };
  },

  componentDidMount: function () {
    AccountStore.addChangeHandler(this._onChange);
    ApiUtil.getAccounts();
  },

  componentWillUnmount: function () {
    AccountStore.removeChangeHandler(this._onChange);
  },

  _onChange: function () {
    this.setState({ accounts: AccountStore.all() });
  },

  render: function() {
    var indexes = [];
    var accountGroups = {};
    var currentType;
    var currentGroup;
    for (var accKey in accountConstants.accountGroupType){
      currentType = this.state.accounts[accKey];
      currentGroup = accountConstants.accountGroupType[accKey];
      if(accountGroups[currentGroup]){
        accountGroups[currentGroup] = accountGroups[currentGroup].concat(currentType);
      }else{
        accountGroups[currentGroup] = currentType;
      }
    }
    for (var accountGroupKey in accountGroups) {
      indexes.push(
        <li key={accountGroupKey}>
          <AccountTypeIndex
          accountGroupType={accountGroupKey}
          accounts={accountGroups[accountGroupKey]} />
        </li>
      );
    }

    return (
      <div className="account-index-list">
        <h1>Accounts</h1>
        <ul>
          {indexes}
        </ul>
      </div>
    );
  }
});
