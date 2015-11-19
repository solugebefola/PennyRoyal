var AccountTypeNavbar = React.createClass({
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
        <ul>
          <li className="account-small-greater " name="cashCredit" onClick={this.clickChangeHandler}>Cash &amp; Credit</li>
          <li className="account-small-greater" name="invest" onClick={this.clickChangeHandler}>Investment</li>
          <li className="account-small-greater" name="cashOnly" onClick={this.clickChangeHandler}>Cash Only</li>
          <li className="account-small-greater" name="loan" onClick={this.clickChangeHandler}>Loan</li>
        </ul>
      </div>
    );
  },

  clickChangeHandler: function (e) {
    e.preventDefault();
    var targetName = e.target.attributes.name.value;

  }
});
