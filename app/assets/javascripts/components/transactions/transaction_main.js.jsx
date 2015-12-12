var TransactionMain = React.createClass({

  getInitialState: function () {
    return {
      transactions: TransactionStore.filterTransactionsOnAccounts(
        ActiveAccountStore.all()
      ),
      activeAccounts: ActiveAccountStore.all(),
      paginatedTransactions: PaginatedTransactionStore.transactions()
    };
  },

  componentDidMount: function () {
    TransactionStore.addChangeHandler(this._onChange);
    ActiveAccountStore.addChangeHandler(this._onActiveChange);
    PaginatedTransactionStore.addChangeHandler(this._onPaginatedChange);
    ApiUtil.getTransactions();
  },

  componentWillUnmount: function () {
    TransactionStore.removeChangeHandler(this._onChange);
    ActiveAccountStore.removeChangeHandler(this._onActiveChange);
    PaginatedTransactionStore.removeChangeHandler(this._onPaginatedChange);
  },

  render: function() {
    return (
      <div>
        <section>
          <TransactionSearch
            searched={ this.props.searched }
            transactions={ this.state.transactions }
            activeAccounts= { this.state.activeAccounts }/>
        </section>
        <section>
          <TransactionIndex
            paginatedTransactions={ this.state.paginatedTransactions }/>
        </section>
      </div>
    );
  },

  _onChange: function () {
    this.setState({
      transactions: TransactionStore.filterTransactionsOnAccounts(ActiveAccountStore.all())
    });
  },

  _onActiveChange: function () {
    this.setState({
      transactions: TransactionStore.filterTransactionsOnAccounts(ActiveAccountStore.all()),
      activeAccounts: ActiveAccountStore.all()
    });
  },

  _onPaginatedChange: function () {
    this.setState({
      paginatedTransactions: PaginatedTransactionStore.transactions()
    });
  },
});
