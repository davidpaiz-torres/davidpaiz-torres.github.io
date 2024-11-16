
const margin = {top: 30, right: 60, bottom: 60, left: 60},
      width = 650 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

const svg = d3.select("#container").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);


// Append the tooltip to the body
const lineTip = d3.select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("position", "absolute")
  .style("padding", "8px")
  .style("background", "rgba(0, 0, 0, 0.7)")
  .style("color", "white")
  .style("border-radius", "4px")
  .style("pointer-events", "none") 
  .style("opacity", 0);





  const parseYear = d3.timeParse("%Y");

  d3.csv("data/overall_arrests.csv").then(data => {
      data.forEach(d => {
          d.arrest_year = parseYear(d.arrest_year);
          d.total_arrests = +d.total_arrests;
      });

      const x = d3.scaleTime()
      .domain([d3.min(data, d => d.arrest_year), d3.max(data, d => d.arrest_year)])
      .range([0, width]);

    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.total_arrests)])
        .range([height, 0]);

    // SVG x-axis
    svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));

    // SVG y-axis
    svg.append("g")
    .call(d3.axisLeft(y));

    // Add X grid lines
    const xAxisGrid = d3.axisBottom(x)
    .tickSize(-height) 
    .tickFormat("")     

    svg.append("g")
    .attr("class", "x grid")
    .attr("transform", `translate(0,${height})`)
    .call(xAxisGrid);

    // Add Y grid lines
    const yAxisGrid = d3.axisLeft(y)
    .tickSize(-width)    
    .tickFormat("") 

    svg.append("g")
    .attr("class", "y grid")
    .call(yAxisGrid);
    
    svg.selectAll(".grid line")
    .style("stroke", "#777")
    .style("stroke-dasharray", "1,1");

    for (let i = 0; i < data.length - 1; i++) {
        svg.append("line")
        .attr("x1", x(data[i].arrest_year))
        .attr("y1", y(data[i].total_arrests))
        .attr("x2", x(data[i + 1].arrest_year))
        .attr("y2", y(data[i + 1].total_arrests))
        .attr("stroke", "darkred")
        .attr("stroke-width", 1.5);
    }
    svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", d => x(d.arrest_year))
        .attr("cy", d => y(d.total_arrests))
        .attr("r", 2.5)
        .attr("stroke", "black")
        .attr("fill", "darkred")

        .on("mouseenter", (event, d, i) => {
          console.log("d:", d);
          console.log("Year:", d.arrest_year.getFullYear());
          console.log("x(d.arrest_year):", x(d.arrest_year));
          console.log("y(d.total_arrests):", y(d.total_arrests));
        
          lineTip.transition().duration(200).style("opacity", 0.9);
          lineTip.html(`
            <strong>Year:</strong> ${d.arrest_year.getFullYear()}<br>
            <strong>Total Arrests:</strong> ${d.total_arrests}<br>
          `)
          .style("top", (event.pageY - 28) + "px")
          .style("left", (event.pageX + 10) + "px");
        })
    .on("mousemove", (event) => {
      lineTip
            .style("left", (event.pageX ) + "px")
            .style("top", (event.pageY) + "px");
    })
    .on("mouseleave", () => {

      lineTip.transition().duration(200).style("opacity", 0);
    });

  
        svg.append("text") 
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .style("fill","#777")
        .style("font-size", "14px")
        .text("Arrests for Sex Work Offenses (2006-2024)");
    
        svg.append("text") 
        .attr("x", width  - 250)
        .attr("x", 330 - margin.left)
        .attr("y", height + margin.top - 345)
        .style("text-anchor", "middle")
        .style("fill","#777")
        .style("font-size", "14px")
        .text("Decrease in Arrests for Sex Work Related Offenses (2006-2024)");

        svg.append("text")
        .attr("x", width - 350)
        .attr("y", height + margin.bottom -24)
        .style("font-size", "12px")
        .style("text-align", "center")
        .style("fill","#777")
        .text("Source: NYPD/NYC Open Data");

        svg.append("text")
        .style("font-size", "12px")
        .attr("x", width - 325)
        .style("text-align", "center")
        .style("fill","#777")
        .attr("y", height + margin.bottom -8)
        .text("By:David Paiz-Torres")

});