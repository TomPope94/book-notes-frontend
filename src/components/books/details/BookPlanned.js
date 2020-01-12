import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import PlanCalendar from 'components/books/details/planning/PlanCalendar';
import MonthPicker from 'components/books/details/planning/MonthPicker';

const styles = {
  plannedContent: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

const BookPlanned = ({ selectedBook, loading }) => {
  const [plannedDate, setPlannedDate] = useState('');
  const [monthChosen, setMonthChosen] = useState(
    moment(new Date()).format('MMM-YYYY')
  );

  useEffect(() => {
    if (selectedBook.datePlanned) {
      setPlannedDate(selectedBook.datePlanned);
    }
  }, [selectedBook]);

  const changeMonthState = newMonth => {
    setMonthChosen(newMonth);
  };

  let plannedRender;
  if (!selectedBook || loading) {
    plannedRender = null;
  } else if (selectedBook.datePlanned) {
    plannedRender = (
      <Fragment>
        <h1>You have planned to start this book on:</h1>
      </Fragment>
    );
  } else {
    plannedRender = (
      <Fragment>
        <MonthPicker changeMonth={newMonth => changeMonthState(newMonth)} />
        <PlanCalendar monthChosen={monthChosen} />
      </Fragment>
    );
  }

  return <div style={styles.plannedContent}>{plannedRender}</div>;
};

const mapStateToProps = state => ({
  selectedBook: state.books.selectedBook,
  loading: state.books.loading
});

export default connect(mapStateToProps)(BookPlanned);
