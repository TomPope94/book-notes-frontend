import React from 'react';
import moment from 'moment';

const styles = {
  vizContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
};

const DateProgression = ({ selectedbook }) => {
  const dateStarted =
    selectedbook.tracking && selectedbook.tracking.length > 0
      ? moment(selectedbook.tracking[0].date, 'YYYYMMDD')
      : null;

  const daysSinceStart = selectedbook.tracking
    ? moment().diff(dateStarted, 'days')
    : null;

  const dailyRate = selectedbook.pagesRead
    ? Math.round((selectedbook.pagesRead / daysSinceStart) * 100) / 100
    : 'Not yet started!';

  const daysLeft = selectedbook.pagesRead
    ? Math.ceil((selectedbook.numPages - selectedbook.pagesRead) / dailyRate)
    : 'Not yet started!';

  return (
    <div style={styles.vizContainer}>
      <h3>
        {daysSinceStart} day{daysSinceStart === 1 ? '' : 's'} ago
      </h3>
      <h3>{dailyRate} ppd</h3>
      <h3>{daysLeft} days</h3>
    </div>
  );
};

export default DateProgression;
