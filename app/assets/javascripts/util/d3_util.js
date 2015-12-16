(function (root) {
  deeThree = root.deeThree = {
    createCategoryBarChart: function (categoryData) {
      var colors = ["red","blue","green","orange", "yellow","purple"];
      var bars = d3.select(".category-chart").selectAll("rect")
        .data(categoryData);
      bars.exit().remove();
      console.log(categoryData);

      bars.enter().append("rect")
        .attr("y", 100)
        .attr("x", function (d,i) { return i * 34; })
        .attr("height", 0)
        .attr("width", 30)
        .transition()
          .attr(
            "height",
            function (d,i) { return d.num_transactions * 50; }
          )
          .duration(500)
          .delay(function (d,i) { return i * 100; })
        .style("fill", function (d,i) {
          return colors[((i) % 7)];
        })
        .style({stroke: "#aaaaaa", "stroke-width": "1px"});
    },

    modifyCategoryBarChart: function (categoryData) {
      var bars = d3.select(".category-chart").selectAll("rect")
        .data(categoryData);
      bars.exit().remove();
    }

  };
})(this);
