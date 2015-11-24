var TransactionForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    var transaction = TransactionStore.singleByID(this.props.transaction_id);
    var category = CategoryStore.single(transaction.category_id) || {name: "uncategorized"};
    return {
      id: transaction.id,
      category: category.name,
      date: transaction.date,
      description: transaction.description,
      amount: transaction.amount
    };
  },
  componentWillMount: function() {
    CategoryStore.addChangeHandler(this._onChange);
    ApiUtil.getCategories();
  },
  componentDidMount: function() {

  },
  componentWillUnmount: function() {
    this.handleSubmit();
    CategoryStore.removeChangeHandler(this._onChange);
  },

  makeDateDropdown: function() {
    var currentDate = new Date(this.state.date);
    var dates = [currentDate];
    var dateBefore;
    var dateAfter;
    for (var i = 1; i < 5; i++){
      dateBefore = currentDate.add(-i).days();
      dates.unshift(dateBefore);
      dateAfter = currentDate.add(i).days();
      dates.push(dateAfter);
    }
    debugger
    return dates.map(function (date) {
      return <li key={ date } id={ date }>{ date.toString('MMM d') }</li>;
    });
  },

  render: function() {

    return (
      <div>
        <form className="transaction-inputs group">
          <div className="transaction-item date">
            <ul className="transaction-item dates" onClick={ this.handleDate }>
              { this.makeDateDropdown() }
            </ul>
          </div>
          <input
            className="transaction-item description"
            type="text"
            onChange={ this.handleInput }
            value={ this.state.description }/>
          <input
            className="transaction-item category"
            type="text"
            name="category"
            onChange={ this.handleInput }
            value={ this.state.category }/>
          <input
            className="transaction-item amount"
            type="text"
            name="amount"
            onChange={ this.handleInput }
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
      newProps.category_id = this.props.transaction.category_id;
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
  },

  handleDate: function (e) {

  },

  _onChange: function () {
    var category = CategoryStore.single(accountProps.category_id) || {name: "uncategorized"};
    this.setState({ category: category.name });
  }
});
