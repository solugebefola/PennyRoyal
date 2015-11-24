var TransactionIndex = React.createClass({
  getInitialState: function() {
    return {
      transactions: TransactionStore.filterTransactionsOnAccounts(ActiveAccountStore.all()),
      activeTransaction: ActiveTransactionStore.one()
    };
  },
  componentWillMount: function() {

  },
  componentDidMount: function() {
    ActiveTransactionStore.addChangeHandler(this._onActiveChange);
    TransactionStore.addChangeHandler(this._onChange);
    ActiveAccountStore.addChangeHandler(this._onActiveChange);
    ApiUtil.getTransactions();
  },
  componentWillUnmount: function() {
    ActiveTransactionStore.removeChangeHandler(this._onActiveChange);
    TransactionStore.removeChangeHandler(this._onChange);
    ActiveAccountStore.removeChangeHandler(this._onActiveChange);
  },

  _makeComponents: function () {
    var transactionsList = this.state.transactions.map(function (transaction) {
      if (transaction.id == this.state.activeTransaction.id) {
        return (
          <li key={ transaction.id } className="transaction-form group">
            <TransactionForm transaction={ transaction }/>
          </li>
        );
      }else{
        return (
          <li key={ transaction.id } className="transaction group" onClick={this._setActive} id={ transaction.id }>
            <TransactionIndexItem transaction={ transaction } newT="false"/>
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
        <h1 className="transaction-title">Transactions</h1>
        <ul className="transaction-list">
          <li className="transaction-index-header">
            <ul className="transaction-item-attributes group">
              <li className="transaction-item date">
                Date
              </li>
              <li className="transaction-item description">
                Description
              </li>
              <li className="transaction-item category">
                Category
              </li>
              <li className="transaction-item amount">
                Amount
              </li>
            </ul>
          </li>
          { transactionsList }
        </ul>
      </div>
    );
  },

  _onChange: function () {
    this.setState({transactions: TransactionStore.filterTransactionsOnAccounts(ActiveAccountStore.all())});
  },

  _onActiveChange: function () {
    this.setState({
      transactions: TransactionStore.filterTransactionsOnAccounts(ActiveAccountStore.all()),
      activeTransaction: ActiveTransactionStore.one()
    });
  },

  _setActive: function (e) {
    e.preventDefault();
    var newActive = this.state.transactions.find(function(transaction) {
      return (transaction.id == e.currentTarget.id);
    });
    ActiveTransactionActions.getActiveTransaction(newActive);
  }
});
