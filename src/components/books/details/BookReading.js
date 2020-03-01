import React, { Fragment, useState } from 'react';
import BookDetailsTracker from 'components/books/details/tracker/BookDetailsTracker';
import BookDetailsNotes from 'components/books/details/notes/BookDetailsNotes';

import { TrackerContext } from 'components/books/details/tracker/tracker-context';

const styles = {
  sectionsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  leftContainer: {
    width: '30%',
    height: '100%',
    paddingTop: 25
  },
  rightContainer: {
    width: '70%',
    height: '100%',
    paddingTop: 25
  }
};

const BookReading = () => {
  const [progressReportState, setProgressReportState] = useState({
    showForm: false,
    date: '',
    numPages: 0
  });
  const changeProgressState = newState => {
    setProgressReportState({ ...progressReportState, ...newState });
  };
  return (
    <Fragment>
      <div style={styles.sectionsContainer}>
        <div style={{ ...styles.leftContainer }}>
          <TrackerContext.Provider
            value={{
              state: progressReportState,
              changeState: changeProgressState
            }}
          >
            <BookDetailsTracker />
          </TrackerContext.Provider>
        </div>
        <div style={styles.rightContainer}>
          <BookDetailsNotes />
        </div>
      </div>
    </Fragment>
  );
};

export default BookReading;
