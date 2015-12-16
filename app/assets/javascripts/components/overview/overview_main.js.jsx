var OverviewMain = React.createClass({

  getInitialState: function () {
    return { name: "", categories: CategoryStore.all() };
  },

  componentDidMount: function () {
    CategoryStore.addChangeHandler(this._onChange);
    ApiUtil.getCategories();
    this.createCategoryBarChart(this.topSixCategories());
  },

  componentWillUnmount: function () {
    CategoryStore.removeChangeHandler(this._onChange);
  },

  topSixCategories: function () {
    sorted = this.state.categories.sort(function (catA, catB){
      if (catA.num_transactions < catB.num_transactions) {
        return 1;
      }else if (catA.num_transactions === catB.num_transactions) {
        return 0;
      }else if (catA.num_transactons > catB.num_transactions) {
        return -1;
      }
    });
    return sorted.slice(0,6);
  },

  createCategoryBarChart: function (categories) {
    var colors = ["red","blue","green","orange", "yellow","purple"];
    var bars = d3.select(".category-chart").selectAll("rect")
      .data(categories);
    bars.exit().remove();

    console.log(categories[0]);
    var xMinScale = 0;
    var xMaxScale = d3.max(categories, function(d) { return (d.num_transactions * 100); });
    var xMinRange = 0;
    var xMaxRange = 490;

    var xScale = d3.scale.linear()
      .domain([xMinScale, xMaxScale])
      .range([xMinRange, xMaxRange]);

    bars.enter().append("rect")
      .attr("x", 0)
      .attr("y", function (d,i) {
        return i * 37;
      })
      .attr("height", 30)
      .attr("width", 0)
      .transition()
        .attr(
          "width",
          function (d,i) { return xScale(d.num_transactions * 100); }
        )
        .attr(
          "height", 35)
        .duration(500)
        .delay(function (d,i) { return i * 100; })
      .style("fill", function (d,i) {
        return "rgb(" +
          (250 - (i * 20)) + "," +
          (200 - (i * 20)) + "," +
          (50 - (i * 5)) + ")";
      });

    barTexts = d3.select(".category-chart").selectAll("text")
      .data(categories)
      .enter()
      .append("text");
    barTexts
      .attr("x", 5)
      .attr("y", function (d,i) { return (i * 37 + 23); })
      .text(function(d) { return (d.name + ": " + d.num_transactions); });
  },

  createCategoryBars: function () {
    return this.topSixCategories().map( function (cat) {
      return <div key={ cat.name }>{ cat.name }</div>;
    });
  },

  render: function() {
      var categories = CategoryStore.all().map(function (cat) {
        return <li className="cat span" key={ cat.id }>{ cat.name }</li>;
      });
    return (
      <div>
        <h1>Your most active categories</h1>
        <svg className="category-chart">
        </svg>
        <ul className="cat list group">
          { categories }
        </ul>
        <label className="cat label"> Add a Category
          <input
            className="cat input"
            type="text"
            onChange={ this.handleChange } />
        </label>
        <button className="cat" onClick={ this.handleSubmit }>
          Add Category
        </button>
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
    this.createCategoryBarChart(this.topSixCategories());
  }

});
