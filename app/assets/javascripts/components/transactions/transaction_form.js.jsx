var TransactionForm = React.createClass({
  getInitialState: function() {
    accountProps = $.extend({}, this.props.transaction);
    return accountProps;
  },
  componentWillMount: function() {

  },
  componentDidMount: function() {

  },
  componentWillUnmount: function() {

  },

  formatDate: function (date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  },

  render: function() {
    createdDate = this.formatDate(this.state.created_at);
    nowDate = this.formatDate();
    return (
      <div>
      <span onBlur={this.handleSubmit}>
        <form>
          <input
            className="transaction-item-date"
            type="date"
            onChange={this.handleInput}
            value={ this.props.newT ? nowDate : createdDate }/>
          <input
            className="transaction-item-description"
            type="text"
            onChange={this.handleInput}
            value={ this.state.description }/>
          <input
            className="transaction-item-amount"
            type="text"
            onChange={this.handleInput}
            value={ this.state.amount }/>
        </form>
        </span>
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
