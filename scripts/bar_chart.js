const bar_margin = {top: 80, right: 80, bottom: 80, left: 80},
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
// parse the data
d3.csv("data/demographics.csv").then(function(data){

    data.forEach(d => {
      
      d.age = d['AGE_GROUP'];
      d.sex = d['PERP_SEX'];
      d.race = d['PERP_RACE'];
      d.desc = d['PD_DESC'];
      d.arrest_year = barYear(d.arrest_year);
  
    });
    


    
  // linear scale
  const barLength = d3.scaleLinear()
    .domain([0, 21025])
    .range([0, bar_width]);

  // x axis for bar chart
  const x = d3.scaleBand()
    .range([0, bar_width])
    .domain(data.map(d => d.race))
    .padding(0.1);

  barChart.append("g")
    .attr("transform", `translate(0,${bar_height})`)
    .call(d3.axisBottom(x))
    .selectAll("text")
      .attr("transform", "translate(-5,0)rotate(-15)")
      .style("text-anchor", "end")
      .style("font-size", "12px")
      .attr("dx", "-.8em")
      .attr("dy", ".15em");

  const y = d3.scaleBand()
    .range([0, bar_height])
    .domain(data.map(d => d.sex))
    .padding(0.1);

  barChart.append("g")
    .call(d3.axisLeft(y));


  barChart.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', d => x(d.race))
    .attr('y', d => y(d.sex))
    .attr('width', x.bandwidth())
    .attr('height', y.bandwidth())
    .attr('fill', 'red')
    .attr('class', 'rect')

  // Tooltip on hover
  .on("mouseenter", (event, d) => {
    const counts = data.filter(item => item.race === d.race && item.sex === d.sex).length;
    barTip.transition().duration(200).style("opacity", 0.9);
    barTip.html(`
      <strong>Race Count:</strong> ${counts}<br>
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