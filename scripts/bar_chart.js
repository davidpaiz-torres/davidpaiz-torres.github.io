const w = 650;
const h = 400;
const barChart = d3.select("#bar-container");

// Load data (replace 'data/sex_work_arrests.csv' with the correct path)
d3.csv('data/sex_work_arrests.csv').then(function(data) {

  barChart
    .append("svg")
    .attr("width", w + "px")
    .attr("height", h + "px")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", function(d, i) {
      return i * (w / data.length); 
    })
    .attr("y", function(d) {
      return h - d; 
    })
    .attr("width", 20)
    .attr("height", function(d) {
      return d;
    });



      barChart.selectAll("rect")
      .data(data) // don't forget to write a filter for this so it only includes demographics
      .enter()
      .append("rect")
      .attr("y", 0)
      .attr("x", function(d, i) {
        return i * (w / dataset.length);
        })
      .attr("width", 20)
      .attr("height", function(d) {
        return d; 
        });
      

    });