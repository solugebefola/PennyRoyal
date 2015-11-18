var AccountIndexItem = React.createClass({
  render: function() {
    return (
      <div>
        <p className="account-institution">
          {this.props.account.institution.name}
        </p>
        <p className="account-name">
          {this.props.account.name}
        </p>
      </div>
    );
  }
});
