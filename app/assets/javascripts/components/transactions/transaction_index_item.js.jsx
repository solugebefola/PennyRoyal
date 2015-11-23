var TransactionIndexItem = React.createClass({
  render: function() {
    var shortMonthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    createdDate = new Date(this.props.transaction.created_at);
    monthNum = createdDate.getUTCMonth();
    cat = "uncategorized" || CategoryStore.single(this.props.transaction.category_id);

    return (
      <div>
        <ul className="transaction-item-attributes group">
          <li className="transaction-item date">
            { createdDate.getDate() }
            { shortMonthNames[monthNum] }
          </li>
          <li className="transaction-item description">
            { this.props.transaction.description }
          </li>
          <li className="transaction-item category">
            { cat }
          </li>
          <li className="transaction-item amount">
            { this.props.transaction.amount }
          </li>
        </ul>
      </div>
    );
  }
});
