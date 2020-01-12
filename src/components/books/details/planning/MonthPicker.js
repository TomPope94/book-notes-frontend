import React, { useState } from 'react';
import moment from 'moment';

const styles = {
  contentContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: 50
  },
  dateContainer: {
    fontSize: '1.5rem'
  }
};

const MonthPicker = ({ changeMonth }) => {
  const [dateChosen, setDateChosen] = useState(
    moment(new Date()).format('MMM-YYYY')
  );

  const handleMonthChange = direction => {
    let newMonth;
    if (direction === 'add') {
      newMonth = moment(dateChosen)
        .add(1, 'months')
        .format('MMM-YYYY');

      setDateChosen(newMonth);
    } else if (direction === 'subtract') {
      newMonth = moment(dateChosen)
        .subtract(1, 'months')
        .format('MMM-YYYY');
      setDateChosen(newMonth);
    }

    changeMonth(newMonth);
  };

  return (
    <div style={styles.contentContainer}>
      <div onClick={() => handleMonthChange('subtract')}>Left</div>
      <div style={styles.dateContainer}>
        <p>{dateChosen}</p>
      </div>
      <div onClick={() => handleMonthChange('add')}>Right</div>
    </div>
  );
};

export default MonthPicker;
