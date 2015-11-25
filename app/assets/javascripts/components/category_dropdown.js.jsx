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
    return this.state.categories.map(function (cat) {
      if( cat.id == this.state.category_id ) { currentCategory = "chosen"; }
      return (
        <li className={ currentCategory } key= { cat.id } id={ cat.id }>
          { cat.name }
        </li>
      );
    }.bind(this));
  },

  render: function() {
    var drop = this.buildDropdown();
    return (
      <div>
        <ul
          className="transaction-item dropdown categories"
          onClick={ this.handleClick }>
          { drop }
        </ul>
      </div>
    );
  },

  handleClick: function (e) {
    e.preventDefault();
    this.setState({ category_id: e.target.id });
  },

  _onChange: function () {
    this.setState({ categories: CategoryStore.all() });
  }
});
