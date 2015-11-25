var TransactionIndexItem = React.createClass({
  getInitialState: function() {
    var transaction = TransactionStore.singleByID(this.props.transaction.id);
    var category = CategoryStore.single(transaction.category_id) || {name: "uncategorized"};
    transaction.categoryName = category.name;
    return transaction;
  },

  componentDidMount: function() {
    CategoryStore.addChangeHandler(this._onChange);
    ApiUtil.getCategories();
  },

  componentWillUnmount: function() {
    CategoryStore.removeChangeHandler(this._onChange);
    TransactionStore.removeChangeHandler(this._onChange);
  },

  render: function() {
    createdDate = (new Date(this.state.date)).toString('MMM d');
    return (
      <div>
        <ul className="transaction-item-attributes group">
          <li className="transaction-item date">
            { createdDate }
          </li>
          <li className="transaction-item description">
            { this.state.description }
          </li>
          <li className="transaction-item category">
            { this.state.category || "UNCATEGORIZED" }
          </li>
          <li className="transaction-item amount">
            { this.state.amount }
          </li>
        </ul>
      </div>
    );
  },
  _onChange: function () {
    var transaction = TransactionStore.singleByID(this.props.transaction.id);
    var category = CategoryStore.single(transaction.category_id) || {name: "uncategorized"};
    transaction.categoryName = category.name;
    this.setState(transaction);
  },
});
