var TransactionsIndex = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Transactions Index</h1>
        <AccountSmallIndex />
        <TransactionMain />
        <TransactionSearch />
        <TransactionIndex />
      </div>
    );
  }
});
