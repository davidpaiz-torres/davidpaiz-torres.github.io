const bar_margin = { top: 80, right: 240, bottom: 80, left: 240 },
  bar_width = 950 - bar_margin.left - bar_margin.right,
  bar_height = 400 - bar_margin.top - bar_margin.bottom;

const bar_container = d3.select('#bar_container');
const barYear = d3.timeParse("%Y");

const barChart = bar_container.append('barChart')
  .append("svg")
  .attr("width", bar_width + bar_margin.left + bar_margin.right)
  .attr("height", bar_height + bar_margin.top + bar_margin.bottom)
  .append("g")
  .attr("transform", `translate(${bar_margin.left},${bar_margin.top})`); 1 

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

// Parse the data
d3.csv("data/demographics.csv").then(function(data) {

// get counts for the datappints + sort them in descending order
  const raceCounts = d3.rollup(data, v => v.length, d => d.PERP_RACE);
  const raceCountArray = Array.from(raceCounts.entries())
    .sort((a, b) => b[1] - a[1]); 

  // scales
  const x = d3.scaleLinear()
    .domain([0, d3.max(raceCountArray, d => d[1])])
    .range([0, bar_width]);

  const y = d3.scaleBand()
    .range([0, bar_height])
    .domain(raceCountArray.map(d => d[0]))
    .padding(0.1);

  // Create the bars for chart
  barChart.selectAll("rect") 
    .data(raceCountArray)
    .enter()
    .append("rect")
    .attr("x", 0)
    .attr("y", d => y(d[0]))
    .attr("width", d => x(d[1]))
    .attr("height", y.bandwidth())
    .attr("fill", "steelblue")
    
    .on("mouseenter", (event, d) => {
      barTip.transition().duration(200).style("opacity", 0.9);
      barTip.html(`
        <strong>Race Count:</strong> ${d[1]}<br>
      `)
        .style("top", (event.pageY - 28) + "px")
        .style("left", (event.pageX + 10) + "px");
    })
   
    .on("mousemove", (event) => {
      barTip
        .style("left", (event.pageX) + "px")
        .style("top", (event.pageY) + "px");
    })
    .on("mouseleave", () => {
      barTip.transition().duration(200).style("opacity", 0);
    });

  // X axis
  barChart.append("g")
    .attr("transform", `translate(0,${bar_height})`)
    .call(d3.axisBottom(x))
    .selectAll("text")
      .attr("transform", "translate(0,0)rotate(-45)")
      .style("text-anchor", "end");

  // Y axis
  barChart.append("g")
    .call(d3.axisLeft(y));
});
