var AccountIndex = React.createClass({
  mixins: [ReactRouter.History],

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

  makeAccountGroups: function () {
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
    return accountGroups;
  },

  render: function() {
    var indexes = [];
    var accountGroups = this.makeAccountGroups();
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
        <h1>Accounts <strong onClick={ this.activateAccountForm }> + ADD ACCOUNT</strong></h1>
        <ul>
          { indexes }
        </ul>
      </div>
    );
  },

  activateAccountForm: function () {
    $(".modal").addClass("is-active");
    this.history.pushState(null, "account/pre");
  }
});
