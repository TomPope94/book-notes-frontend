import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getDailyTracking } from 'actions/books/tracker';

import AddProgressForm from 'components/books/tracker/AddProgressForm';
import BookTrackerReport from 'components/books/tracker/BookTrackerReport';

const BookDetailsTracker = ({ getDailyTracking, selectedBook }) => {
  const [showReport, setShowReport] = useState(true);

  useEffect(() => {
    getDailyTracking(selectedBook.bookId);
  }, []);

  return (
    <Fragment>
      <h1>Reading Tracker:</h1>
      <button onClick={() => setShowReport(!showReport)}>Change</button>
      {showReport ? <BookTrackerReport /> : <AddProgressForm />}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  selectedBook: state.books.selectedBook
});

export default connect(mapStateToProps, { getDailyTracking })(
  BookDetailsTracker
);
