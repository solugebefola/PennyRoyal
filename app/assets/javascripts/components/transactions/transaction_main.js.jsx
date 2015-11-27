var TransactionMain = React.createClass({

  getInitialState: function () {
    return {
      transactions: TransactionStore.filterTransactionsOnAccounts(ActiveAccountStore.all()),
      activeAccounts: ActiveAccountStore.all()
    };
  },

  componentDidMount: function () {
    TransactionStore.addChangeHandler(this._onChange);
    ActiveAccountStore.addChangeHandler(this._onActiveChange);
    ApiUtil.getTransactions();
  },

  componentWillUnmount: function () {
    TransactionStore.removeChangeHandler(this._onChange);
    ActiveAccountStore.removeChangeHandler(this._onActiveChange);
  },

  render: function() {
    return (
      <div>
        <section>
          <TransactionSearch
            transactions={ this.state.transactions }
            activeAccounts= { this.state.activeAccounts }/>
        </section>
        <section>
          <TransactionIndex transactions={ this.state.transactions }/>
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
});
