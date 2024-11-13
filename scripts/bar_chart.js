const barData = d3.csv("../data/boro_arrests.csv")
console.log(barData)

barData.then(function(data) {
const parseDate = d3.timeParse("%Y");
    data.forEach(d => {
        d.year = parseDate(d.arrest_year); 
        d.boro = (d.arrest_boro);
        d.arrests = (d.arrest_total);

const margin = {top: 0, right: 60, bottom: 60, left: 60},
    width = 650 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

const svg = d3.select("#barContainer")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
        const x = d3.scaleLinear()
    .range([0, width])
    .domain([0, d3.max(data, function (d){return d.arrests;})])

    data = data.sort(function(x, y){
        return d3.descending(x.arrests, y.arrests);
    })

     //add rectangles
     svg.selectAll('rectangles')
     .data(data)
     .enter()
     .append('rect')
     .attr('x', function(d,i){
         return margin_left +d.boro;
     })
     //put Y variable
     .attr('y',function(d,i){
         return margin_top;
     })

     .attr('width', function(d,i){
         return d.arrests;
     }) 
    })
});