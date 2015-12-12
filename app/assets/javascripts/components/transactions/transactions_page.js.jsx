var TransactionsPage = React.createClass({

  getInitialState: function () {
    return { recentSearch: false };
  },

  render: function() {
    return (
      <div>
        <ul className="transaction-sections">
          <li className="transaction-small-index">
            <AccountSmallIndex searched={ this.searched }/>
          </li>
          <li className="transaction-main">
            <TransactionMain searched={ this.searched } />
          </li>
        </ul>
      </div>
    );
  },

  searched: function () {
    if (arguments.length > 0) {
      this.setState({ recentSearch: arguments[0] });
    }else{
      return this.state.recentSearch;
    }
  }
});
