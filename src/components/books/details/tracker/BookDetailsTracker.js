import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getDailyTracking } from 'actions/books/tracker';

import AddProgressForm from 'components/books/details/tracker/AddProgressForm';
import BookTrackerReport from 'components/books/details/tracker/BookTrackerReport';

const styles = {
  title: {
    color: 'rgba(34, 38, 65, 0.75)',
    fontWeight: 200
  },
  titleRow: {
    display: 'flex',
    alignItems: 'center'
  }
};

const BookDetailsTracker = ({ getDailyTracking, selectedBook }) => {
  const [showReport, setShowReport] = useState(true);

  useEffect(() => {
    getDailyTracking(selectedBook.bookId);
  }, []);

  return (
    <Fragment>
      <div style={styles.titleRow}>
        <h1 style={styles.title}>Track your reading:</h1>
        <button
          onClick={() => setShowReport(!showReport)}
          style={{ marginLeft: 20 }}
        >
          Add
        </button>
      </div>
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
