import React, { Fragment } from 'react';

const styles = {
  titlesContainer: {
    display: 'flex'
  },
  daysTitle: {
    border: '1px solid grey',
    height: 50,
    width: '14.286%'
  }
};

const CalendarTitleRow = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  let renderedDays = [];
  for (let i = 0; i < days.length; i++) {
    renderedDays.push(<div style={styles.daysTitle}>{days[i]}</div>);
  }

  return <div style={styles.titlesContainer}>{renderedDays}</div>;
};

export default CalendarTitleRow;
