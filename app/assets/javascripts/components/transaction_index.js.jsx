var TransactionIndex = React.createClass({
  getInitialState: function() {
    return { transactions: TransactionStore.all(), activeTransaction: ActiveTransactionStore.one() };
  },
  componentWillMount: function() {

  },
  componentDidMount: function() {
    ActiveTransactionStore.addChangeHandler(this._onActiveChange);
    TransactionStore.addChangeHandler(this._onChange);
    ApiUtil.getTransactions();
  },
  componentWillUnmount: function() {
    ActiveTransactionStore.removeChangeHandler(this._onActiveChange);
    TransactionStore.removeChangeHandler(this._onChange);
  },

  _makeComponents: function () {
    var transactionsList = this.state.transactions.map(function (transaction) {
      if (transaction.id == activeTransaction.id) {
        return (
          <li>
            <TransactionForm />
          </li>
        );
      }else{
        return (
          <li>
            <TransactionIndexItem />
          </li>
        );
      }
    });
    return transactionsList;
  },

  render: function() {
    var transactionsList = this._makeComponents();
    return (
      <div>
        <h1>Transactions Index</h1>
        <ul>
          { transactionsList }
        </ul>
      </div>
    );
  }
});
