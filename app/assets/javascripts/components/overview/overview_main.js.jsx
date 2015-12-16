var OverviewMain = React.createClass({

  getInitialState: function () {
    return { name: "", categories: CategoryStore.all() };
  },

  componentDidMount: function () {
    CategoryStore.addChangeHandler(this._onChange);
    ApiUtil.getCategories();
    deeThree.createCategoryBarChart(this.state.categories);
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
        <ul className="cat list group">
          { categories }
          <li>
            <label className="cat label"> Add a Category
              <input
                className="cat input"
                type="text"
                onChange={ this.handleChange } />
            </label>
            <button className="cat" onClick={ this.handleSubmit }>
              Add Category
            </button>
          </li>
          <li>
            <svg className="category-chart"></svg>
          </li>
        </ul>
      </div>
    );
  },

  handleChange: function (e) {
    e.preventDefault();
    this.setState({ name: e.target.value });
  },

  handleSubmit: function (e) {
    e.preventDefault();
    ApiUtil.createCategory(this.state);
  },

  _onChange: function () {
    this.setState({ categories: CategoryStore.all() });
    deeThree.createCategoryBarChart(this.state.categories);
  }

});
