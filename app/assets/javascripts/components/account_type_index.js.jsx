var AccountTypeIndex = React.createClass({

  getInitialState: function() {
    var accountsSum = 0;
    if (this.props.accounts){
      this.props.accounts.forEach(function(account){
        accountsSum += account.balance;
      });
    }

    return { accountsSum: accountsSum };
  },

  render: function() {
    var accounts = this.props.accounts.map(function(account){
      return <li key={account.id}><AccountIndexItem accountItem={account} /></li>;
    });

    return (
      <ul className={"account-type-index " + this.props.accountType}>
        <li className="summary">
          <p className="summary-type">{this.props.accountType}</p>
          <p className="summary-sum">{this.state.accountSum}</p>
        </li>
        {accounts}
      </ul>
    );
  }
});
