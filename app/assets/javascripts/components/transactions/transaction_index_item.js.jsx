var TransactionIndexItem = React.createClass({
  getInitialState: function() {
    accountProps = $.extend({}, this.props.transaction);
    accountProps.category = CategoryStore
      .single(accountProps.category_id) || "uncategorized";
    return accountProps;
  },

  componentWillMount: function() {
    CategoryStore.addChangeHandler(this._onChange);
    ApiUtil.getCategories();
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
            { this.state.category }
          </li>
          <li className="transaction-item amount">
            { this.state.amount }
          </li>
        </ul>
      </div>
    );
  },
  _onChange: function () {
    accountProps = $.extend({}, this.state);
    accountProps.category = CategoryStore.single(accountProps.category_id) || "uncategorized";
    this.setState(accountProps);
  },
});
