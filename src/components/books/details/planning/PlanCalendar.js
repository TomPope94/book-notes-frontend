import * as d3 from 'd3';

const PlanCalendar = (props) => {
    d3.selectAll('.calendarViz > *').remove();

    const marginValue = 50;
    const margin = {
        top: marginValue,
        right: marginValue,
        bottom: marginValue,
        left: marginValue
      },
      width = props.width, // Use the window's width
      height = props.height; // Use the window's height

      
}