import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getDailyTracking } from 'actions/books/tracker';
import { TrackerContext } from 'components/books/details/tracker/tracker-context';

import AddProgressForm from 'components/books/details/tracker/AddProgressForm';
import BookTrackerReport from 'components/books/details/tracker/BookTrackerReport';
import BookProgression from 'components/books/details/tracker/BookProgression';
import DateProgression from './DateProgression';

const styles = {
  trackerContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '100%'
  },
  titleRow: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexGrow: 1
  },
  title: {
    color: '#216e82',
    fontWeight: 200,
    marginBottom: 0
  },
  orangeSpan: {
    color: '#ff8c56'
  },
  lineChartContainer: {
    minHeight: 210,
    marginTop: 20,
    flexGrow: 2
  },
  detailVisualisations: {
    display: 'flex',
    width: '100%',
    flexGrow: 10,
    justifyContent: 'space-around',
    alignItems: 'center'
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
    <div style={styles.trackerContainer}>
      <div style={styles.titleRow}>
        <h1 style={styles.title}>
          Track your reading
          <span style={styles.orangeSpan}>:</span>
        </h1>
        <TrackerContext.Consumer>
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
        </TrackerContext.Consumer>
      </div>
      <div style={styles.lineChartContainer}>
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
      <div style={styles.detailVisualisations}>
        <BookProgression selectedbook={selectedBook} />
        <DateProgression selectedbook={selectedBook} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  selectedBook: state.books.selectedBook
});

export default connect(mapStateToProps, { getDailyTracking })(
  BookDetailsTracker
);
