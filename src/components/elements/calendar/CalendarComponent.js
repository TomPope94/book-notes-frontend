import React from 'react';
import moment from 'moment';

import CalendarMonth from 'components/elements/calendar/CalendarMonth';

const styles = {
  calendarContainer: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  monthContainer: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  arrowLeft: {
    width: 0,
    height: 0,
    borderTop: '15px solid transparent',
    borderBottom: '15px solid transparent',
    borderRight: '15px solid rgba(243,139,102, 0.5)',
    cursor: 'pointer',
    marginRight: 20
  },
  arrowRight: {
    width: 0,
    height: 0,
    borderTop: '15px solid transparent',
    borderBottom: '15px solid transparent',
    borderLeft: '15px solid rgba(243,139,102, 0.5)',
    cursor: 'pointer',
    marginLeft: 20
  }
};

const CalendarComponent = ({ changestate, state }) => {
  const calcMonths = (startMonth, numMonths) => {
    const monthsArr = [startMonth];
    for (let i = 1; i < numMonths; i++) {
      const monthToAdd = moment(startMonth, 'MMM-YYYY')
        .add(i, 'months')
        .format('MMM-YYYY');
      monthsArr.push(monthToAdd);
    }
    return monthsArr;
  };

  const months = calcMonths(state.monthChosen, state.monthsToShow);
  //Calc what months are to show (in array)
  return (
    <div style={styles.calendarContainer}>
      <div
        style={styles.arrowLeft}
        onClick={() =>
          changestate({
            ...state,
            monthChosen: moment(state.monthChosen, 'MMM-YYYY')
              .subtract(1, 'months')
              .format('MMM-YYYY')
          })
        }
      />
      <div style={styles.monthContainer}>
        {months.map(month => (
          <CalendarMonth monthChosen={month} />
        ))}
      </div>
      <div
        style={styles.arrowRight}
        onClick={() =>
          changestate({
            ...state,
            monthChosen: moment(state.monthChosen, 'MMM-YYYY')
              .add(1, 'months')
              .format('MMM-YYYY')
          })
        }
      ></div>
    </div>
  );
};

export default CalendarComponent;
