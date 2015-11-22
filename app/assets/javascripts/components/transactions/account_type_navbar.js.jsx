var AccountTypeNavbar = React.createClass({
  getInitialState: function() {
    return {group: ""};
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
        <ul onClick={ this.clickChangeHandler }>
          <li className="account-small-greater" name="cashCredit">Cash &amp; Credit</li>
          <li className="account-small-greater" name="invest">Investment</li>
          <li className="account-small-greater" name="cashOnly">Cash Only</li>
          <li className="account-small-greater" name="loan">Loan</li>
        </ul>
      </div>
    );
  },

  clickChangeHandler: function (e) {
    e.preventDefault();
    var targetName = e.target.attributes.name.value;
    debugger
  }
});
