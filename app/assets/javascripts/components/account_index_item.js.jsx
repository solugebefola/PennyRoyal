var AccountIndexItem = React.createClass({
  mixins: [ReactRouter.History],

  render: function() {
    return (
      <div>
        <ul className="group" onClick={this._setActive}>
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
  },

  _setActive: function () {
    ActiveAccountActions.setActiveAccount(this.props.accountItem);
    this.history.pushState(null, "/transactions");
  }
});
