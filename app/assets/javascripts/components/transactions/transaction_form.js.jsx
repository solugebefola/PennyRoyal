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
    this.handleSubmit();
  },

  formatDate: function (date) {
    var d = new Date(date),
        month = '' + (d.getUTCMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  },

  render: function() {
    createdDate = this.formatDate(this.state.date);
    nowDate = this.formatDate();
    return (
      <div>
        <form className="transaction-inputs group">
          <input
            className="transaction-item date"
            type="text"
            onChange={this.handleInput}
            name="date"
            value={ this.props.newT ? nowDate : createdDate }/>
          <input
            className="transaction-item description"
            type="text"
            onChange={this.handleInput}
            name="description"
            value={ this.state.description }/>
          <input
            className="transaction-item amount"
            type="text"
            onChange={this.handleInput}
            name="amount"
            value={ this.state.amount }/>
        </form>
        <span onClick={this.showDetailForm}>EDIT DETAILS</span>
      </div>
    );
  },

  handleSubmit: function () {
    if (this.props.newT){
      console.log("new item, not made yet!");
    }else{
      var newProps = $.extend({}, this.state);
      newProps.date = new Date(newProps.date);
      ApiUtil.editTransaction(newProps);
    }
  },

  handleInput: function (e) {
    if (this.props.newT || (e.currentTarget.name !== "amount")){
      var newProps = {};
      newProps[e.currentTarget.name] = e.currentTarget.value;
      this.setState(newProps);
    }
  }
});
