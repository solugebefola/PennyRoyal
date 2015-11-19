var AccountIndexItem = React.createClass({
  render: function() {
    return (
      <div>
        <ul className="group">
          <li className="account-text">
            <p className="account-institution">
              {this.props.accountItem.institution.name}
            </p>
            <p className="account-name">
              {this.props.accountItem.name}
            </p>
          </li>
          <li className="account-balance">
            <p>
              ${parseFloat(this.props.accountItem.balance).toFixed(2)}
            </p>
            <p className="account-update-time">
              0.0001 minute ago
            </p>
          </li>
        </ul>
      </div>
    );
  }
});
