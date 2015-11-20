var TransactionsIndex = React.createClass({
  render: function() {
    return (
      <div>
      <h1>Transactions Index</h1>
        { this.props.children }
      </div>
    );
  }
});
