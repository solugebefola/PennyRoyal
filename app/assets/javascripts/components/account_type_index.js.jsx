var AccountTypeIndex = React.createClass({

  getInitialState: function() {

    return { accountsSum: 0 };
  },

  componentDidMount: function () {
  },

  componentWillReceiveProps: function (newProps){
    this.getAccountsSum(newProps);
  },

  getAccountsSum: function (props) {
    var accountsSum = 0;
    console.log(props);
    if (props.accounts){
      props.accounts.forEach(function(account){
        accountsSum += parseFloat(account.balance);
      });
    }
    this.setState({accountsSum: accountsSum.toFixed(2)});
  },

  render: function() {
    console.log("account sum "+ this.state.accountsSum);
    var accounts = this.props.accounts.map(function(account){
      return (
        <li className="account-type-index-items" key={account.id}>
          <AccountIndexItem accountItem={account} />
        </li>
      );
    });

    return (
      <div>
        <ul className={"account-type-index " + this.props.accountType}>
          <li className="summary group">
            <p className="summary-type">{this.props.accountGroupType}</p>
            <p className="summary-sum">${this.state.accountsSum}</p>
          </li>
          {accounts}
        </ul>
      </div>
    );
  }
});
