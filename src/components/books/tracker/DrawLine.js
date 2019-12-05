import * as d3 from 'd3';
import 'components/books/tracker/Line.css';

const DrawLine = props => {
  d3.select('.viz > *').remove();
  const margin = { top: 50, right: 50, bottom: 50, left: 50 },
    width = props.width, // Use the window's width
    height = props.height; // Use the window's height

  const parseTime = d3.timeParse('%Y%m%d');

  // set the ranges
  var x = d3.scaleTime().range([0, width]);
  var y = d3.scaleLinear().range([height, 0]);

  let svg = d3
    .select('.viz')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  let svgDefs = svg.append('defs');
  let mainGradient = svgDefs
    .append('linearGradient')
    .attr('id', 'mainGradient')
    .attr('x1', '0%')
    .attr('y1', '0%')
    .attr('x2', '0%')
    .attr('y2', '100%');

  mainGradient
    .append('stop')
    .attr('stop-color', '#7dbdc6')
    .attr('offset', '0');
  mainGradient
    .append('stop')
    .attr('stop-color', '#edf7f8')
    .attr('offset', '1');

  const dataset = props.selectedBook.tracking;

  dataset.forEach(day => {
    if (typeof day.date === 'number') {
      const dateString = day.date.toString();
      day.date = parseTime(dateString);
      day.numPages = day.numPages;
    }
  });

  // get first and last date available
  // find number of days between the two points
  // loop from the first date and add a day until hit the number of days
  // go through dataset and match each day to the looped days data set
  // if no match is found, make 0
  const dateRange = d3.extent(dataset, d => d.date);
  const dayDiff = d3.timeDay.count(dateRange[0], dateRange[1]);
  let chartedData = [];
  for (let i = 0; i < dayDiff; i++) {
    const newDate = d3.timeDay.offset(dateRange[0], i);
    const matchData = dataset.filter(
      d => d.date.toString() === newDate.toString()
    );

    chartedData.push({
      date: newDate,
      numPages: matchData.length > 0 ? matchData[0].numPages : 0
    });
  }

  x.domain(
    d3.extent(chartedData, function(d) {
      return d.date;
    })
  );
  y.domain([
    0,
    d3.max(chartedData, function(d) {
      return d.numPages;
    })
  ]);

  const area = boolean => {
    return d3
      .area()
      .x(d => x(d.date))
      .y0(y(0))
      .y1(d => (boolean ? y(d.numPages) : 0))
      .curve(d3.curveMonotoneX);
  };

  svg
    .append('path')
    .data([chartedData])
    .attr('fill', 'url(#mainGradient)')
    .attr('stroke', 'none')
    .attr('d', area(false))
    .transition()
    .duration(1000)
    .attr('d', area(true));

  svg
    .append('g')
    .attr('transform', 'translate(0,' + height + ')')
    .call(d3.axisBottom(x).ticks(chartedData.length));
};

export default DrawLine;
