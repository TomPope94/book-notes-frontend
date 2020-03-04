import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getDailyTracking } from 'actions/books/tracker';
import { TrackerContext } from 'components/books/details/tracker/tracker-context';

import AddProgressForm from 'components/books/details/tracker/AddProgressForm';
import BookTrackerReport from 'components/books/details/tracker/BookTrackerReport';

const styles = {
  title: {
    color: '#216e82',
    fontWeight: 200,
    paddingLeft: 25
  },
  titleRow: {
    display: 'flex',
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
        <h3>{selectedBook.numPages}</h3>
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
                style={{ marginLeft: 20 }}
              >
                +
              </button>
            )
          }
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
