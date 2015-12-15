(function(root){
  deeThree = root.deeThree = {
    createCategoryBarChart: function (categoryData, bars) {
      bars = d3.select(".category-chart").selectAll("rect")
        .data(categoryData);
      bars.exit().remove();

      bars.enter().append("rect")
        .attr("x", 10)
        .attr("y", function (d,i) { return i * 10; });
    },

    modifyCategoryBarChart: function (categoryData, bars) {

    }

  };
})(root);
