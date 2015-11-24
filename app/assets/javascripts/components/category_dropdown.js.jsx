var CategoryDropdown = React.createClass({
  getInitialState: function() {
    debugger
    return {
      categories: CategoryStore.all(),
      category_id: this.props.currentCategoryID
    };
  },

  componentWillMount: function() {

  },

  componentDidMount: function() {
    CategoryStore.addChangeHandler(this._onChange);
  },

  componentWillUnmount: function() {
    CategoryStore.removeChangeHandler(this._onChange);
    this.props.setCategory();
  },

  buildDropdown: function () {
    var currentCategory;
    var categories = this.categories.map(function (cat) {
      if( cat.id == category_id ) { currentCategory = "chosen"; }
      return (
        <li className={ currentCategory } key= { cat.id } id={ cat.id }>
          { cat.name }
        </li>
      );
    });
  },

  render: function() {
    return (
      <div>
        <ul
          className="transaction-item dropdown categories"
          onClick={ this.handleClick }>
          { this.buildDropdown() }
        </ul>
      </div>
    );
  },

  handleClick: function (e) {
    e.preventDefault();
    debugger
    this.setState({ category_id: e.target.id });
  },

  _onChange: function () {
    this.setState({ categories: CategoryStore.all() });
  }
});
