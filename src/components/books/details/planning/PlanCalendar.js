import React, { useContext } from "react";
import moment from "moment";
import uuid from "uuid";

import { DayPickedContext } from "components/books/details/planning/dayPicked-context";

import CalendarRow from "components/books/details/planning/CalendarRow";
import CalendarTitleRow from "components/books/details/planning/CalendarTitleRow";

const styles = {
  calendar: {
    height: "100%",
    width: "60%",
    display: "flex",
    flexDirection: "column"
  }
};

const PlanCalendar = () => {
  const pickedContext = useContext(DayPickedContext);
  const monthChosen = pickedContext.state.monthChosen;

  const calcDays = monthChosen =>
    moment(monthChosen, "MMM-YYYY")
      .add(1, "months")
      .subtract(1, "days")
      .date();

  const calcRows = monthChosen => {
    const numDays = calcDays(monthChosen);
    let rowCount;
    if (moment(monthChosen, "MMM-YYYY").day() === 1) {
      rowCount = 0;
    } else {
      rowCount = 1;
    }

    for (let i = 0; i < numDays; i++) {
      const dateDay = moment(monthChosen, "MMM-YYYY")
        .add(i, "days")
        .day();
      if (dateDay === 1) {
        rowCount += 1;
      }
    }
    return rowCount;
  };
  const numRows = calcRows(monthChosen);

  const numsBetween = (start, end) => {
    const numbers = [];

    for (let i = start; i <= end; i++) {
      numbers.push(i);
    }

    return numbers;
  };

  const renderRows = (numRows, monthChosen) => {
    let rows = [];
    let prevLastDay = 0;
    const startDay = moment(monthChosen, "MMM-YYYY").day();
    const numDays = calcDays(monthChosen);

    for (let i = 1; i <= numRows; i++) {
      let dates;
      let rowPos;
      if (i === 1) {
        rowPos = "first";
        if (startDay === 0) {
          dates = numsBetween(1, 1);
          prevLastDay = 1;
        } else {
          dates = numsBetween(1, 7 - startDay + 1);
          prevLastDay = 8 - startDay;
        }
      } else if (i === numRows) {
        rowPos = "last";
        dates = numsBetween(prevLastDay + 1, numDays);
      } else {
        rowPos = "middle";
        dates = numsBetween(prevLastDay + 1, prevLastDay + 7);
        prevLastDay = prevLastDay + 7;
      }
      rows.push(
        <CalendarRow
          key={uuid.v4()}
          dates={dates}
          monthChosen={monthChosen}
          pos={rowPos}
        />
      );
    }

    return rows;
  };

  return (
    <div style={styles.calendar}>
      <CalendarTitleRow />
      {renderRows(numRows, monthChosen)}
    </div>
  );
};

export default PlanCalendar;
