// Load data (replace 'data.csv' with the correct path to your CSV file)
d3.csv('data/sex_work_arrests.csv').then(function(data) {

    // Process the data to count arrests per ARREST_YEAR
    let arrestCounts = d3.rollup(data, v => v.length, d => d.ARREST_YEAR);
    let years = Array.from(arrestCounts, ([year, count]) => ({year, count}));

    // Set the dimensions of the SVG container
    const width = 800;
    const height = 500;
    const margin = {top: 20, right: 30, bottom: 40, left: 40};

    // Create an SVG element
    const svg = d3.select('#barContainer')
        .attr('width', width)
        .attr('height', height);

    // Define the scales
    const xScale = d3.scaleBand()
        .domain(years.map(d => d.year))
        .range([margin.left, width - margin.right])
        .padding(0.1);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(years, d => d.count)])
        .nice()
        .range([height - margin.bottom, margin.top]);

    // Add X axis
    svg.append('g')
        .selectAll('.x-axis')
        .data(years)
        .join('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(xScale).tickSize(0))
        .selectAll('text')
        .style('text-anchor', 'middle')
        .attr('class', 'axis-label');

    // Add Y axis
    svg.append('g')
        .selectAll('.y-axis')
        .data(years)
        .join('g')
        .attr('class', 'y-axis')
        .attr('transform', `translate(${margin.left},0)`)
        .call(d3.axisLeft(yScale).ticks(5))
        .selectAll('text')
        .style('text-anchor', 'middle')
        .attr('class', 'axis-label');

    // Create bars
    svg.selectAll('.bar')
        .data(years)
        .join('rect')
        .attr('class', 'bar')
        .attr('x', d => xScale(d.year))
        .attr('y', d => yScale(d.count))
        .attr('width', xScale.bandwidth())
        .attr('height', d => height - margin.bottom - yScale(d.count));

});
