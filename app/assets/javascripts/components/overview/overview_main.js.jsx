var OverviewMain = React.createClass({

  getInitialState: function () {
    return { catInput: "", categories: CategoryStore.all() };
  },

  componentDidMount: function () {
    CategoryStore.addChangeHandler(this._onChange);
    ApiUtil.getCategories();
  },

  componentWillUnmount: function () {
    CategoryStore.removeChangeHandler(this._onChange);
  },

  render: function() {
      var categories = CategoryStore.all().map(function (cat) {
        return <li className="cat span" key={ cat.id }>{ cat.name }</li>;
      });
    return (
      <div>
        <ul>
          { categories }
          <li>Add a Category</li>
          <li>
            <input
              className="cat input"
              type="text"
              onChange={ this.handleChange } />
          </li>
        </ul>
        <button onClick={ this.handleSubmit }>Add Category</button>
      </div>
    );
  },

  handleChange: function (e) {
    e.preventDefault();
    this.setState({ catInput: e.target.value });
  },

  handleSubmit: function (e) {
    e.preventDefault();
    ApiUtil.createCategory(this.state);
  },

  _onChange: function () {
    this.setState({ categories: CategoryStore.all() });
  }

});
