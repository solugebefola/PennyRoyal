var TransactionSearch = React.createClass({
  getInitialState: function() {
    return { search_text: "" };
  },
  componentWillMount: function() {

  },
  componentDidMount: function() {

  },
  componentWillUnmount: function() {

  },

  balances: function () {
    var thisMonthTransactions = this.props.transactions.filter(function (transaction) {
      return Date.compare(new Date(transaction.date), Date.parse('-1 month')) >= 0;
    });
    var positiveBalance = 0;
    var negativeBalance = 0;
    thisMonthTransactions.forEach( function (transaction) {
      if (transaction.amount > 0){
        positiveBalance += parseFloat(transaction.amount);
      }else{
        negativeBalance += parseFloat(transaction.amount);
      }
    });
    return [positiveBalance, negativeBalance];
  },

  render: function() {
    var openingStatement;
    if (this.props.activeAccounts.length === 1){
      openingStatement = <h2>for { this.props.activeAccounts[0].name || "All Accounts" }</h2>;
    }else{
      openingStatement = <h2>for Selected Accounts</h2>;
    }
    balances = this.balances();
    return (
      <div>
        <ul className="transaction-search list group">
          <li>
            <h1 className="transaction-search header">This Month's Transactions</h1>
            { openingStatement }
            <p>
              <em className="positive">
                { accounting.formatMoney(balances[0], "$",2,",",".") }
              </em>
              <em className="negative">
                { accounting.formatMoney(balances[1], "$",2,",",".") }
              </em>
            </p>
          </li>
          <li>
            <form>
              <label className="transaction-search">Search
              <input
                type="text"
                onKeyPress={ this.handleSearch }
                onChange={ this.handleChange }
                value={ this.state.searchValue }/>
              </label>
            </form>
          </li>
        </ul>
      </div>
    );
  },

  handleChange: function (e) {
    e.preventDefault();
    this.setState({ search_text: e.target.value });
  },

  handleSearch: function (e) {
    e.stopPropagation();
    if (e.key === "Enter") {
      ApiUtil.getTransactionSearches(e.target.value);
      this.setState({ search_text: "" });
      this.props.searched(true);
    }
  }

});
