const bar_margin = {top: 40, right: 60, bottom: 60, left: 60},
      bar_width = 650 - bar_margin.left - bar_margin.right,
      bar_height = 400 - bar_margin.top - bar_margin.bottom;

  const bar_container = d3.select('#bar_container');
  const barYear = d3.timeParse("%Y"); 

    const barChart = bar_container.append('barChart') 
      .append("svg")
      .attr("width", bar_width + bar_margin.left + bar_margin.right)
      .attr("height", bar_height + bar_margin.top + bar_margin.bottom)
      .append("g")
      .attr("transform", `translate(${bar_margin.left},${bar_margin.top})`);

      // Tooltip
    const barTip = d3.select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("padding", "8px")
      .style("background", "rgba(0, 0, 0, 0.7)")
      .style("color", "white")
      .style("border-radius", "4px")
      .style("pointer-events", "none") 
      .style("opacity", 0);


d3.csv("data/demographics.csv").then(function(data){

    data.forEach(d => {
      d.age = d['AGE_GROUP'];
      d.sex = d['PERP_SEX'];
      d.race = d['PERP_RACE'];
      d.desc = d['PD_DESC'];
      d.arrest_year = parseYear(d.arrest_year);
    });


  const barLength = d3.scaleLinear()
    .domain([0, 21025])
    .range([0, bar_width]);

  barChart.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', bar_margin.left + 10)
    .attr('y', (d,i) => (bar_margin.top - 15) + (i *35))
    .attr("width", d => barLength(d.age))
    .attr("height", 20)
    .attr("fill", "orangered")

//     .attr('x', function(d, i) {
//       return bar_margin.left + 10;
//     })
//     .attr('y', function(d, i) {
//       return (bar_margin.top - 15) + (i * 35);
//     })
//     .attr("width", function(d, i) {
//       return barLength(raceCount.find(a => a[0] === d.race)[1]);
//     })
//     .attr("height", 20)
//     .attr("fill", "orangered");

// });




// Tooltip on hover
  .on("mouseenter", (event, d) => {
      barTip.transition().duration(200).style("opacity", 0.9);
      barTip.html(`
        <strong>Race Count:</strong> ${data}<br>
      `)
      .style("top", (event.pageY - 28) + "px")
      .style("left", (event.pageX + 10) + "px");
    })
.on("mousemove", (event) => {
  barTip
        .style("left", (event.pageX ) + "px")
        .style("top", (event.pageY) + "px");
})
.on("mouseleave", () => {
  barTip.transition().duration(200).style("opacity", 0);
});
});