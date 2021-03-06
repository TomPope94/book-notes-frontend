import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { DayPickedContextPlanning } from 'components/planning/dayPickedPlanning-context';

import PlanCalendar from 'components/books/details/planning/PlanCalendar';
import MonthPicker from 'components/books/details/planning/MonthPicker';
import PlanDetails from 'components/books/details/planning/PlanDetails';

const styles = {
  plannedContent: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  calendarContainer: {
    width: '100%',
    height: '100%',
    display: 'flex'
  },
  monthPickerRow: {
    width: '100%',
    display: 'flex'
  },
  monthPickerBuffer: {
    width: '40%'
  }
};

const Calendar = () => {
  const [dateSelected, setDateSelected] = useState({
    dayPicked: moment().date(),
    boxChosen: '',
    monthChosen: moment().format('MMM-YYYY'),
    dateChosen: moment().format('Do MMM YYYY'),
    plannedDate: false
  });

  const changeDateSelectedState = newState => {
    setDateSelected({ ...dateSelected, ...newState });
  };

  return (
    <div>
      <DayPickedContextPlanning.Provider
        value={{
          state: dateSelected,
          changeState: changeDateSelectedState
        }}
      >
        <div style={styles.monthPickerRow}>
          <div style={styles.monthPickerBuffer}></div>
          <MonthPicker />
        </div>
        <div style={styles.calendarContainer}>
          <PlanDetails />
          <PlanCalendar
            changeDate={newDate => changeDateSelectedState(newDate)}
          />
        </div>
      </DayPickedContextPlanning.Provider>
    </div>
  );
};

export default Calendar;
