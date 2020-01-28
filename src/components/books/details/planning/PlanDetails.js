import React, { useContext, useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import moment from "moment";

import { DayPickedContext } from "components/books/details/planning/dayPicked-context";

import { editBook } from "actions/books/books";

import DateChosen from "components/books/details/planning/DateChosen";

const styles = {
  detailsContainter: {
    width: "40%",
    minHeight: 500,
    marginLeft: 20,
    marginRight: 20,
    color: "rgba(34, 38, 65, 0.75)",
    position: "relative"
  },
  startNowButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    cursor: "pointer"
  }
};

const PlanDetails = ({ selectedBook, editBook }) => {
  const pickedContext = useContext(DayPickedContext);
  const { dateChosen, plannedDate } = pickedContext.state;
  const [datePassed, setDatePassed] = useState(false);

  useEffect(() => {
    if (dateChosen) {
      const dateBefore = moment(dateChosen, "YYYYMMDD").isBefore(moment());
      if (dateBefore) {
        setDatePassed(true);
      } else {
        setDatePassed(false);
      }
    }
  }, [dateChosen]);

  const handleClick = async newState => {
    if (selectedBook) {
      await editBook(selectedBook.bookId, {
        ...selectedBook,
        bookState: newState
      });
    }
  };

  const dayDiff = moment(dateChosen, "YYYYMMDD").diff(moment(), "days") + 1;

  return (
    <div style={styles.detailsContainter}>
      <h1>
        {!plannedDate ? (
          "It looks like we're missing a start date!"
        ) : (
          <DateChosen date={dateChosen} />
        )}
      </h1>
      {datePassed ? (
        <h2>Start reading?</h2>
      ) : (
        <Fragment>
          <h2>
            {dayDiff} day{dayDiff === 1 ? null : "s"} left
          </h2>
          <h3
            style={styles.startNowButton}
            onClick={() => handleClick("Reading")}
          >
            Or start reading now?
          </h3>
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  selectedBook: state.books.selectedBook
});

export default connect(mapStateToProps, { editBook })(PlanDetails);
