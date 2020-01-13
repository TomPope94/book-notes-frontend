import React, { useContext, useEffect } from "react";

import { DayPickedContext } from "components/books/details/planning/dayPicked-context";

const styles = {
  detailsContainter: {
    width: "40%",
    height: "100%"
  }
};

const PlanDetails = () => {
  const pickedContext = useContext(DayPickedContext);
  const {
    dayPicked,
    monthChosen,
    dateChosen,
    plannedDate
  } = pickedContext.state;

  return (
    <div style={styles.detailsContainter}>
      <h1>{!plannedDate ? "Pick a date!" : dateChosen}</h1>
    </div>
  );
};

export default PlanDetails;
