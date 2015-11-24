var TransactionForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    accountProps = $.extend({}, this.props.transaction);
    accountProps.category = CategoryStore.single(accountProps.category_id) || "uncategorized";
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
            onChange={ this.handleInput }
            name="date"
            value={ this.props.newT ? nowDate : createdDate }/>
          <input
            className="transaction-item description"
            type="text"
            valueLink={ this.linkState('description') }/>
          <input
            className="transaction-item category"
            type="text"
            name="category"
            valueLink={ this.linkState('category') }/>
          <input
            className="transaction-item amount"
            type="text"
            name="amount"
            valueLink={ this.linkState('amount') }/>
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
      debugger
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
