var TransactionsPage = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Transactions Page</h1>
        <ul className="transaction-sections">
          <li className="transaction-small-index">
            <AccountSmallIndex />
          </li>
          <li className="transaction-main">
            <TransactionMain />
          </li>
        </ul>
      </div>
    );
  }
});
