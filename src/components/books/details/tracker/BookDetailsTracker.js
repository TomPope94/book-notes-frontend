import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getDailyTracking } from 'actions/books/tracker';
import { TrackerContext } from 'components/books/details/tracker/tracker-context';

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
  const [reportState, setReportState] = useState({
    show: true,
    dateSelected: '',
    numPages: 0
  });
  const { show, dateSelected, numPages } = reportState;

  useEffect(() => {
    if (selectedBook) {
      getDailyTracking(selectedBook.bookId);
    }
  }, []);

  let toRender;
  if (selectedBook.tracking) {
    toRender = (
      <Fragment>
        <BookTrackerReport />
      </Fragment>
    );
  } else {
    toRender = null;
  }

  return (
    <Fragment>
      <div style={styles.titleRow}>
        <h1 style={styles.title}>Track your reading:</h1>
        <TrackerContext.Consumer>
          {({ changeState, state }) => (
            <button
              onClick={() =>
                changeState({ ...state, showForm: !state.showForm })
              }
              style={{ marginLeft: 20 }}
            >
              Add
            </button>
          )}
        </TrackerContext.Consumer>
      </div>
      <TrackerContext.Consumer>
        {({ state }) =>
          !state.showForm ? (
            toRender
          ) : (
            <AddProgressForm dateSelected={dateSelected} numPages={numPages} />
          )
        }
      </TrackerContext.Consumer>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  selectedBook: state.books.selectedBook
});

export default connect(mapStateToProps, { getDailyTracking })(
  BookDetailsTracker
);
