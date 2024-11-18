const bar_margin = {top: 40, right: 60, bottom: 60, left: 60},
      bar_width = 650 - bar_margin.left - bar_margin.right,
      bar_height = 400 - bar_margin.top - bar_margin.bottom;

      const barChart = d3.select("#bar-container").append("svg")
      .attr("width", bar_width + bar_margin.left + bar_margin.right)
      .attr("height", bar_height + bar_margin.top + bar_margin.bottom)
      .append("g")
      .attr("transform", `translate(${bar_margin.left},${bar_margin.top})`); 1 
      
 d3.csv("data/arrests_by_demographics.csv").then(loadedData => {

  data.forEach(d => {
    ageGroup = +d.AGE_GROUP,
    sex = +d.PERP_SEX,
    race = +d.PERP_RACE,
    year = +d.ARREST_YEAR,
    description = +d.PD_DESC
});




  createBarChart(data);
});
