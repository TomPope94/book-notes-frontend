import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getDailyTracking } from 'actions/books/tracker';
import { TrackerContext } from 'components/books/details/tracker/tracker-context';

import AddProgressForm from 'components/books/details/tracker/AddProgressForm';
import BookTrackerReport from 'components/books/details/tracker/BookTrackerReport';
import BookProgression from 'components/books/details/tracker/BookProgression';
import DateProgression from './DateProgression';

const styles = {
  title: {
    color: '#216e82',
    fontWeight: 200,
    marginBottom: 0
  },
  titleRow: {
    paddingLeft: 25,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
};

const BookDetailsTracker = ({ getDailyTracking, selectedBook }) => {
  const [reportState] = useState({
    dateSelected: '',
    numPages: 0
  });
  const { dateSelected, numPages } = reportState;

  useEffect(() => {
    if (selectedBook) {
      getDailyTracking(selectedBook.bookId);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <div style={styles.titleRow}>
        <h1 style={styles.title}>Track your reading:</h1>
        {/* <TrackerContext.Consumer>
          {({ changeState, state }) =>
            state.showForm ? null : (
              <button
                onClick={() =>
                  changeState({
                    ...state,
                    showForm: !state.showForm,
                    dateSelected: '',
                    numPages: 0
                  })
                }
              >
                +
              </button>
            )
          }
        </TrackerContext.Consumer> */}
      </div>
      <div style={{ minHeight: 210, marginTop: 20 }}>
        <TrackerContext.Consumer>
          {({ state }) =>
            !state.showForm ? (
              <Fragment>
                <BookTrackerReport />
              </Fragment>
            ) : (
              <AddProgressForm
                dateSelected={dateSelected}
                numPages={numPages}
              />
            )
          }
        </TrackerContext.Consumer>
      </div>
      <BookProgression selectedbook={selectedBook} />
      <DateProgression selectedbook={selectedBook} />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  selectedBook: state.books.selectedBook
});

export default connect(mapStateToProps, { getDailyTracking })(
  BookDetailsTracker
);
