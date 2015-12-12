var TransactionIndex = React.createClass({
  getInitialState: function() {
    return {
      activeTransaction: ActiveTransactionStore.one()
    };
  },

  componentDidMount: function() {
    ActiveTransactionStore.addChangeHandler(this._onActiveChange);
  },

  componentWillUnmount: function() {
    ActiveTransactionStore.removeChangeHandler(this._onActiveChange);
  },

  componentWillReceiveProps: function (newProps) {

  },

  _makeComponents: function () {
    var transactionsList = this.props.paginatedTransactions.map(function (transaction) {
      if (transaction.id == this.state.activeTransaction.id) {
        return (
          <li key={ transaction.id } className="transaction-form group">
            <TransactionForm transaction={ transaction }/>
          </li>
        );
      }else{
        return (
          <li key={ transaction.id } className="transaction group" onClick={ this._setActive } id={ transaction.id }>
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
        <PaginationNav />
      </div>
    );
  },



  _onActiveChange: function () {
    this.setState({
      activeTransaction: ActiveTransactionStore.one()
    });
  },

  _setActive: function (e) {
    e.preventDefault();
    var newActive = this.props.paginatedTransactions.find(function(transaction) {
      return (transaction.id == e.currentTarget.id);
    });
    ActiveTransactionActions.getActiveTransaction(newActive);
  }
});
