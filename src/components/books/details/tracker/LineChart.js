import React, { useContext } from 'react';
import * as d3 from 'd3';

export default ({
  x,
  y,
  width,
  height,
  dataset,
  xDimension,
  yDimension,
  padding = 10
}) => {
  if (dataset) {
    const xScale = d3.scaleTime().range([0, width]);
    const yScale = d3.scaleLinear().range([height, 0]);

    const parseTime = d3.timeParse('%Y%m%d');

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

    xScale.domain(
      d3.extent(chartedData, function(d) {
        return d.date;
      })
    );
    yScale.domain([
      0,
      d3.max(chartedData, function(d) {
        return d.numPages;
      })
    ]);

    const area = boolean => {
      return d3
        .area()
        .x(d => xScale(d.date))
        .y0(yScale(0))
        .y1(d => (boolean ? yScale(d.numPages) : 0))
        .curve(d3.curveMonotoneX);
    };

    const line = d3
      .line()
      .x(d => xScale(d.date))
      .y(d => yScale(d.numPages))
      .curve(d3.curveMonotoneX);

    return (
      <g transform={`translate(${x}, ${y})`}>
        {/* <path d={area(true)} /> */}
        <path d={d3.line} />
      </g>
    );
  } else {
    return null;
  }
};
