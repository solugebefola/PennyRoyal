var AccountSmallIndexItem = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentWillMount: function() {

  },
  componentDidMount: function() {

  },
  componentWillUnmount: function() {

  },
  render: function() {
    return (
      <div>
        <p className="account-small-greater">{ this.props.account.institution.name }</p>
        <p className="account-small-lesser">{ this.props.account.name }</p>
      </div>
    );
  }
});
