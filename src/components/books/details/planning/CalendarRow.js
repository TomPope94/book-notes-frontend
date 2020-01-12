import React from 'react';
import DayBox from 'components/books/details/planning/DayBox';

const styles = {
  rowContainer: {
    flexGrow: 1,
    display: 'flex'
  }
};

const CalendarRow = ({ dates, pos }) => {
  let days = [];
  if (pos === 'first') {
    const numBlanks = 7 - dates.length;
    for (let i = 1; i <= numBlanks; i++) {
      dates.unshift('');
    }
  }

  if (pos === 'last') {
    const numBlanks = 7 - dates.length;
    for (let i = 1; i <= numBlanks; i++) {
      dates.push('');
    }
    // debugger;
  }
  //   debugger;
  for (let i = 0; i < dates.length; i++) {
    days.push(<DayBox date={dates[i]} />);
  }

  return <div style={styles.rowContainer}>{days}</div>;
};

export default CalendarRow;
