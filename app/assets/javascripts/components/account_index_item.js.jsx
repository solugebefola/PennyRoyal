var AccountIndexItem = React.createClass({
  render: function() {
    return (
      <div>
        <p className="account-institution">
          {this.props.accountItem.institution.name}
        </p>
        <p className="account-name">
          {this.props.accountItem.name}
        </p>
      </div>
    );
  }
});
