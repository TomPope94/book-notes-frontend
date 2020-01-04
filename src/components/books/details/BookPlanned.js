import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';

const BookPlanned = ({ selectedBook, loading }) => {
  const [plannedDate, setPlannedDate] = useState('');
  useEffect(() => {
    if (selectedBook.datePlanned) {
      setPlannedDate(selectedBook.datePlanned);
    }
  }, [selectedBook]);

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
        <h1>Please select a planned starting date...</h1>
        <input type="date" />
      </Fragment>
    );
  }

  return <div>{plannedRender}</div>;
};

const mapStateToProps = state => ({
  selectedBook: state.books.selectedBook,
  loading: state.books.loading
});

export default connect(mapStateToProps)(BookPlanned);
