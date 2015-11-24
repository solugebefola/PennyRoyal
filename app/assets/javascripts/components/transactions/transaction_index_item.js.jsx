var TransactionIndexItem = React.createClass({
  getInitialState: function() {
    accountProps = $.extend({}, this.props.transaction);
    accountProps.categories = CategoryStore.all();
    return accountProps;
  },

  componentDidMount: function() {
    CategoryStore.addChangeHandler(this._onChange);
    ApiUtil.getCategories();
  },

  componentWillUnmount: function() {
    CategoryStore.removeChangeHandler(this._onChange);
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
    this.setState({ categories: CategoryStore.all() });
  },
});
