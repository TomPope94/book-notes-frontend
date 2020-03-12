import React, { useState } from 'react';
import moment from 'moment';

import CalendarComponent from 'components/elements/calendar/CalendarComponent';

// Overview:
// 1. Displays month(s) dependent on what's chosen and how many to show
// 2. Able to have multiple books active within the calendar at anytime
// 3. Ability to hover over a book and that highlights within the calendar

const Calendar = ({ numMonths }) => {
  const [calendarState, setCalendarState] = useState({
    dayPicked: moment().date(),
    monthChosen: moment().format('MMM-YYYY'),
    dateChosen: moment().format('Do MMM YYYY'),
    boxChosen: [],
    plannedDate: false,
    monthsToShow: numMonths
  });

  return (
    <div>
      <CalendarComponent changestate={setCalendarState} state={calendarState} />
    </div>
  );
};

export default Calendar;
