var TransactionForm = React.createClass({
  getInitialState: function() {
    accountProps = $.extend({}, this.props.account);
    return accountProps;
  },
  componentWillMount: function() {

  },
  componentDidMount: function() {

  },
  componentWillUnmount: function() {

  },
  render: function() {
    createdDate = new Date(this.props.transaction.created_at);
    nowDate = new Date();
    return (
      <div>
        <form onBlur={this.handleSubmit}>
          <input
            className="transaction-item-date"
            type="date"
            onChange={this.handleInput}
            value={new Date()}/>
          <input
            className="transaction-item-description"
            type="text"
            value={ this.state.description }/>
          <input
            className="transaction-item-amount"
            type="text"
            onChange={this.handleInput}
            value={ this.state.amount }/>
        </form>
        <span onClick={this.showDetailForm}>Edit details</span>
      </div>
    );
  },

  handleSubmit: function (e) {
    e.preventDefault();
    debugger
  },

  handleInput: function (e) {
    debugger
    var newProps = {};
    newProps[e.currentTarget.name] = e.currentTarget.value;
    this.setState(newProps);
  }
});
