import React from 'react';
import moment from 'moment';

const styles = {
  detailsText: {
    fontWeight: 200
  }
};

const DateChosen = ({ date }) => {
  const formattedDate = moment(date, 'YYYYMMDD').format('Do MMM YYYY');

  return (
    <div>
      <h2 style={styles.detailsText}>Currently planned to start on:</h2>
      <h3 style={styles.detailsText}>{formattedDate}</h3>
    </div>
  );
};

export default DateChosen;
