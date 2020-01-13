import React, { useContext, useEffect } from "react";
import moment from "moment";

import { DayPickedContext } from "components/books/details/planning/dayPicked-context";

const styles = {
  detailsContainter: {
    width: "40%",
    height: "100%"
  }
};

const PlanDetails = () => {
  const pickedContext = useContext(DayPickedContext);
  const { dayPicked, monthChosen, dateChosen } = pickedContext.state;

  return (
    <div style={styles.detailsContainter}>
      <h1>{dateChosen}</h1>
    </div>
  );
};

export default PlanDetails;
