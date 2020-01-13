import React, { Fragment, useState } from "react";
import BookDetailsTracker from "components/books/details/tracker/BookDetailsTracker";
import BookDetailsNotes from "components/books/details/notes/BookDetailsNotes";

import { TrackerContext } from "components/books/details/tracker/tracker-context";

const styles = {
  sectionsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row"
  },
  container: {
    width: "50%",
    height: "100%",
    paddingTop: 25,
    position: "relative"
  }
};

const BookReading = () => {
  const [progressReportState, setProgressReportState] = useState({
    showForm: false,
    date: "",
    numPages: 0
  });
  const changeProgressState = newState => {
    setProgressReportState({ ...progressReportState, ...newState });
  };
  return (
    <Fragment>
      <div style={styles.sectionsContainer}>
        <div style={{ ...styles.container }}>
          <TrackerContext.Provider
            value={{
              state: progressReportState,
              changeState: changeProgressState
            }}
          >
            <BookDetailsTracker />
          </TrackerContext.Provider>
        </div>
        <div style={styles.container}>
          <BookDetailsNotes />
        </div>
      </div>
    </Fragment>
  );
};

export default BookReading;
