import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import moment from "moment";

import { DayPickedContext } from "components/books/details/planning/dayPicked-context";

import PlanCalendar from "components/books/details/planning/PlanCalendar";
import MonthPicker from "components/books/details/planning/MonthPicker";
import PlanDetails from "components/books/details/planning/PlanDetails";

const styles = {
  plannedContent: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column"
  },
  calendarContainer: {
    width: "100%",
    height: "100%",
    display: "flex"
  }
};

const BookPlanned = ({ selectedBook, loading }) => {
  const [plannedDate, setPlannedDate] = useState("");
  const [dateSelected, setDateSelected] = useState({
    dayPicked: moment(new Date()).date(),
    boxChosen: "",
    monthChosen: moment(new Date()).format("MMM-YYYY"),
    dateChosen: moment().format("Do MMM YYYY")
  });

  useEffect(() => {
    if (selectedBook.datePlanned) {
      setPlannedDate(selectedBook.datePlanned);
    }
  }, [selectedBook]);

  const changeDateSelectedState = newState => {
    setDateSelected({ ...dateSelected, ...newState });
  };

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
        <DayPickedContext.Provider
          value={{
            state: dateSelected,
            changeState: changeDateSelectedState
          }}
        >
          <MonthPicker />
          <div style={styles.calendarContainer}>
            <PlanDetails />
            <PlanCalendar
              changeDate={newDate => changeDateSelectedState(newDate)}
            />
          </div>
        </DayPickedContext.Provider>
      </Fragment>
    );
  }

  return <div style={styles.plannedContent}>{plannedRender}</div>;
};

const mapStateToProps = state => ({
  selectedBook: state.books.selectedBook,
  loading: state.books.loading
});

export default connect(mapStateToProps)(BookPlanned);
