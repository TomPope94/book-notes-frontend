import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import moment from "moment";

import { DayPickedContext } from "components/books/details/planning/dayPicked-context";

import PlanCalendar from "components/books/details/planning/PlanCalendar";
import MonthPicker from "components/books/details/planning/MonthPicker";
import PlanDetails from "components/books/details/planning/PlanDetails";
import WaveBlue from "components/elements/dividers/WaveBlue";

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
  },
  monthPickerRow: {
    width: "100%",
    display: "flex"
  },
  monthPickerBuffer: {
    width: "40%"
  }
};

const BookPlanned = ({ selectedBook, loading }) => {
  const [dateSelected, setDateSelected] = useState({
    dayPicked: moment().date(),
    boxChosen: "",
    monthChosen: moment().format("MMM-YYYY"),
    dateChosen: moment().format("Do MMM YYYY"),
    plannedDate: false
  });

  useEffect(() => {
    if (selectedBook.datePlanned) {
      setDateSelected({
        ...dateSelected,
        plannedDate: selectedBook.datePlanned,
        dateChosen: selectedBook.datePlanned,
        dayPicked: moment(selectedBook.datePlanned).date()
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeDateSelectedState = newState => {
    setDateSelected({ ...dateSelected, ...newState });
  };

  return (
    <div style={styles.plannedContent}>
      <DayPickedContext.Provider
        value={{
          state: dateSelected,
          changeState: changeDateSelectedState
        }}
      >
        <div style={styles.monthPickerRow}>
          <div style={styles.monthPickerBuffer}></div>
          <MonthPicker />
        </div>
        <div style={styles.calendarContainer}>
          <PlanDetails />
          <PlanCalendar
            changeDate={newDate => changeDateSelectedState(newDate)}
          />
        </div>
      </DayPickedContext.Provider>
      <WaveBlue
        style={{ position: "absolute", left: 0, bottom: 0, zIndex: -1 }}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  selectedBook: state.books.selectedBook,
  loading: state.books.loading
});

export default connect(mapStateToProps)(BookPlanned);
