import React, { useState } from 'react';
import uuid from 'uuid';

import DayBox from 'components/elements/calendar/DayBox';

const styles = {
  rowContainer: {
    flexGrow: 1,
    display: 'flex'
  }
};

const CalendarRow = ({ dates, pos, monthChosen }) => {
  const [dayPicked, setDayPicked] = useState(0);

  let days = [];
  // Prepend empty squares if first row
  if (pos === 'first') {
    const numBlanks = 7 - dates.length;
    for (let i = 1; i <= numBlanks; i++) {
      dates.unshift('');
    }
  }

  // Append empty squares if the bottom row
  if (pos === 'last') {
    const numBlanks = 7 - dates.length;
    for (let i = 1; i <= numBlanks; i++) {
      dates.push('');
    }
  }

  const handleClick = newDay => {
    setDayPicked(newDay);
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
