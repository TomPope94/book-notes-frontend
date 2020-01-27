import * as d3 from "d3";

const DrawLine = (props, changeState, state) => {
  d3.selectAll(".viz > *").remove();
  const marginValue = 50;
  const margin = {
      top: marginValue,
      right: marginValue,
      bottom: marginValue,
      left: marginValue
    },
    width = props.width, // Use the window's width
    height = props.height; // Use the window's height

  const parseTime = d3.timeParse("%Y%m%d");
  const formatTime = d3.timeFormat("%b %e");
  const datePickerValue = d3.timeFormat("%Y-%m-%d");
  const getDay = d3.timeFormat("%e");
  const getDaySuffix = day => {
    switch (day) {
      case 1:
      case 21:
      case 31:
        return "st";
      case 2:
      case 22:
        return "nd";
      case 3:
      case 23:
        return "rd";
      default:
        return "th";
    }
  };

  // set the ranges
  const x = d3.scaleTime().range([0, width]);
  const y = d3.scaleLinear().range([height, 0]);

  const svg = d3
    .select(".viz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  const svgDefs = svg.append("defs");
  const mainGradient = svgDefs
    .append("linearGradient")
    .attr("id", "mainGradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "0%")
    .attr("y2", "100%");

  mainGradient
    .append("stop")
    .attr("stop-color", "#7dbdc6")
    .attr("offset", "0");
  mainGradient
    .append("stop")
    .attr("stop-color", "rgba(125,189,198,0.25)")
    .attr("offset", "1");

  const filterOne = svgDefs
    .append("filter")
    .attr("id", "filter1")
    .attr("x", "0")
    .attr("y", "0")
    .attr("width", "200%")
    .attr("height", "200%");

  filterOne
    .append("feOffset")
    .attr("result", "offOut")
    .attr("in", "SourceAlpha")
    .attr("dx", "-2")
    .attr("dy", "-2");
  filterOne
    .append("feGaussianBlur")
    .attr("result", "blurOut")
    .attr("in", "offOut")
    .attr("stdDeviation", "1");
  filterOne
    .append("feBlend")
    .attr("in", "SourceGraphic")
    .attr("in2", "blurOut")
    .attr("mode", "normal");

  const dataset = props.selectedBook.tracking;

  dataset.forEach(day => {
    if (typeof day.date === "number") {
      const dateString = day.date.toString();
      day.date = parseTime(dateString);
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
  for (let i = 0; i <= dayDiff; i++) {
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

  const line = d3
    .line()
    .x(d => x(d.date))
    .y(d => y(d.numPages))
    .curve(d3.curveMonotoneX);

  const tooltip = d3
    .select(".viz")
    .append("div")
    .style("position", "absolute")
    .style("text-align", "center")
    .style("width", "75px")
    // .style('height', '30px')
    .style("padding", "2px")
    .style("font", "12px baskerville")
    .style("background", "#222641")
    .style("color", "#fff")
    .style("box-shadow", "0 2px 5px grey")
    .style("border", "0px")
    .style("border-radius", "8px")
    .style("pointer-events", "none")
    .style("font-size", "1.25rem")
    .style("opacity", 0);

  svg
    .append("path")
    .data([chartedData])
    .attr("fill", "url(#mainGradient)")
    .attr("stroke", "none")
    .attr("d", area(false))
    .transition()
    .duration(1000)
    .attr("d", area(true));

  const linePath = svg
    .append("path")
    .data([chartedData])
    .attr("stroke", "#222641")
    .attr("fill", "none")
    .attr("stroke-width", "2")
    .attr("filter", "#filterOne")
    .attr("d", line);

  // Variable to Hold Total Length
  const totalLength = linePath.node().getTotalLength();

  // Set Properties of Dash Array and Dash Offset and initiate Transition
  linePath
    .attr("stroke-dasharray", totalLength + " " + totalLength)
    .attr("stroke-dashoffset", totalLength)
    .transition() // Call Transition Method
    .duration(1000) // Set Duration timing (ms)
    .delay(750)
    .ease(d3.easeLinear) // Set Easing option
    .attr("stroke-dashoffset", 0); // Set final value of dash-offset for transition

  const dots = svg
    .selectAll("dot")
    .data(chartedData)
    .enter()
    .append("circle")
    .attr("r", 3)
    .attr("cx", d => x(d.date))
    .attr("cy", d => y(d.numPages))
    .attr("cursor", "pointer")
    .attr("stroke", "#222641")
    .attr("stroke-width", 1)
    .attr("fill", "#fff")
    .attr("opacity", 0);

  svg
    .selectAll("dot")
    .data(chartedData)
    .enter()
    .append("circle")
    .attr("r", 30)
    .attr("cx", d => x(d.date))
    .attr("cy", d => y(d.numPages))
    .attr("cursor", "pointer")
    .attr("stroke", "transparent")
    .attr("stroke-width", 1)
    .attr("fill", "transparent")
    .attr("opacity", 0)
    .on("mouseover", function(d) {
      const day = parseInt(getDay(d.date));

      tooltip
        .transition()
        .duration(500)
        .style("opacity", 0.9);
      tooltip
        .html(
          `${formatTime(d.date)}${getDaySuffix(day)}<br/>${d.numPages} pages`
        )
        .style("left", `${x(d.date) + 10}px`)
        .style("top", `${y(d.numPages) - 10}px`);
    })
    .on("mouseout", function(d) {
      tooltip
        .transition()
        .duration(500)
        .style("opacity", 0);
    })
    .on("click", d => {
      changeState({
        ...state,
        showForm: !state.showForm,
        dateSelected: datePickerValue(d.date),
        numPages: d.numPages
      });
    });

  dots
    .transition()
    .delay(500)
    .attr("opacity", 1);
};

export default DrawLine;
