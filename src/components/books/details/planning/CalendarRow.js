import React, { useState } from "react";
import uuid from "uuid";

import DayBox from "components/books/details/planning/DayBox";

const styles = {
  rowContainer: {
    flexGrow: 1,
    display: "flex"
  }
};

const CalendarRow = ({ dates, pos, monthChosen }) => {
  const [dayPicked, setDayPicked] = useState(0);
  // debugger;
  let days = [];
  if (pos === "first") {
    const numBlanks = 7 - dates.length;
    for (let i = 1; i <= numBlanks; i++) {
      dates.unshift("");
    }
  }

  if (pos === "last") {
    const numBlanks = 7 - dates.length;
    for (let i = 1; i <= numBlanks; i++) {
      dates.push("");
    }
  }

  const handleClick = newDay => {
    setDayPicked(newDay);
    // debugger;
  };

  for (let i = 0; i < dates.length; i++) {
    days.push(
      <DayBox
        id={`${dates[i]}-${monthChosen}`}
        key={uuid.v4()}
        date={dates[i]}
        dayPicked={dayPicked}
        setDay={newDay => handleClick(newDay)}
        monthChosen={monthChosen}
      />
    );
  }

  return <div style={styles.rowContainer}>{days}</div>;
};

export default CalendarRow;
