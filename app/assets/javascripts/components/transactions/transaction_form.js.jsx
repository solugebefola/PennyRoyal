var TransactionForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    var transaction = TransactionStore.singleByID(this.props.transaction.id);
    var category = CategoryStore.single(transaction.category_id) || {name: "uncategorized"};
    transaction.categoryName = category.name;
    return transaction;
  },

  componentWillMount: function() {
  },

  componentDidMount: function() {
    CategoryStore.addChangeHandler(this._onChange);
    ApiUtil.getCategories();
  },

  componentWillUnmount: function() {
    this.handleSubmit();
    CategoryStore.removeChangeHandler(this._onChange);
    TransactionStore.removeChangeHandler(this._onChange);
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
              value={ new Date(this.state.date).toString('MMM d') } disabled/>
            <ul className="transaction-item dropdown dates" id="dates" onClick={ this.handleDate }>
              { this.makeDateDropdown() }
            </ul>
          </div>
          <input
            className="transaction-item description"
            type="text"
            onChange={ this.handleInput }
            value={ this.state.description }/>
          <div className="transaction-item category">
            <input
              className="transaction-item category"
              type="text"
              name="category"
              value={ this.state.categoryName } disabled/>
            <CategoryDropdown setCategory={ this.setCategory } currentCategoryID={ this.state.category_id }/>
          </div>
          <input
            className="transaction-item amount"
            type="text"
            name="amount"
            onChange={ this.handleInput }
            decimal="2"
            value={ this.state.amount }/>
        </form>
        <div>
          <span className="detail-tab" onClick={ this.showDetailForm }>EDIT DETAILS</span>
          <div className="detail-form">
            <TransactionFormDetail
              transaction={ this.props.transaction }
              getDetailProps={ this.getDetailProps } />
          </div>
        </div>
      </div>
    );
  },

  handleSubmit: function () {
    if (this.props.newT){
      console.log("new item, not made yet!");
    }else{
      var newProps = $.extend({}, this.state);
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
  },

  _onChange: function () {
    var transaction = TransactionStore.singleByID(this.props.transaction.id);
    var category = CategoryStore.single(transaction.category_id) || {name: "uncategorized"};
    transaction.categoryName = category.name;
    this.setState(transaction);
  },

  setCategory: function (id) {
    var category = CategoryStore.single(id) || {name: "uncategorized"};
    this.setState({ category_id: id, categoryName: category.name });
  },

  showDetailForm: function () {

  },

  getDetailProps: function (newProps) {
    this.setState(newProps);
  }
});
