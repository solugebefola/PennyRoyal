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
      if (transaction.id == this.state.activeTransaction.id) {
        return (
          <li key={ transaction.id } >
            <TransactionForm transaction={ transaction }/>
          </li>
        );
      }else{
        return (
          <li key={ transaction.id }>
            <TransactionIndexItem transaction={ transaction }/>
          </li>
        );
      }
    }.bind(this));
    return transactionsList;
  },

  render: function() {
    var transactionsList = this._makeComponents();
    return (
      <div>
        <h1>Transaction Index</h1>
        <ul>
          { transactionsList }
        </ul>
      </div>
    );
  },

  _onChange: function () {
    this.setState({transactions: TransactionStore.all()});
  },

  _onActiveChange: function () {
    this.setState({activeTransaction: ActiveTransactionStore.one()});
  }
});
