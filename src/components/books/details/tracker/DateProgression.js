import React from 'react';
import moment from 'moment';

const DateProgression = ({ selectedbook }) => {
  //   debugger;
  const dateStarted = selectedbook.tracking
    ? moment(selectedbook.tracking[0].date, 'YYYYMMDD')
    : null;

  const daysSinceStart = selectedbook.tracking
    ? moment().diff(dateStarted, 'days')
    : null;

  // to work out daily rate, going to need to have the read total in the book data (not just added from the array of tracking...)

  return (
    <div>
      {selectedbook.tracking ? (
        <h3>{`Date Started: ${dateStarted.format('DD-MM-YYYY')}`}</h3>
      ) : null}
      <h3>Days since starting: {daysSinceStart}</h3>
    </div>
  );
};

export default DateProgression;
