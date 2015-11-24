var TransactionForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    var transaction = TransactionStore.singleByID(this.props.transaction_id);
    var category = CategoryStore.single(transaction.category_id) || {name: "uncategorized"};
    return {
      id: transaction.id,
      category: category.name,
      category_id: transaction.category_id,
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
      dateBefore = new Date(this.state.date).add(-i).days();
      dates.unshift(dateBefore);
      dateAfter = new Date(this.state.date).add(i).days();
      dates.push(dateAfter);
    }
    return dates.map(function (date) {
      return <li key={ date } id={ date.toString() }>{ date.toString('MMM d') }</li>;
    });
  },

  render: function() {

    return (
      <div>
        <form className="transaction-inputs group">
          <div className="transaction-item date group">
            <input
              className="transaction-item date"
              type="text"
              value={ new Date(this.state.date ).toString('MMM d') }/>
            <ul className="transaction-item dates" id="dates" onClick={ this.handleDate }>
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
      newProps.category_id = CategoryStore.single(this.state.category) || 1;
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
    this.setState({ date: new Date(e.target.id) });
    $("#dates").css("display", "none");
  },

  _onChange: function () {
    var category = CategoryStore.single(accountProps.category_id) || {name: "uncategorized"};
    this.setState({ category: category.name });
  },

  showDetailForm: function () {

  }
});
