import React from "react";
import moment from "moment";

import { DayPickedContext } from "components/books/details/planning/dayPicked-context";

const styles = {
  contentContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    marginTop: 50
  },
  dateContainer: {
    fontSize: "1.5rem"
  },
  arrowLeft: {
    width: 0,
    height: 0,
    borderTop: "15px solid transparent",
    borderBottom: "15px solid transparent",
    borderRight: "15px solid rgba(243,139,102, 0.5)",
    cursor: "pointer",
    marginRight: 20
  },
  arrowRight: {
    width: 0,
    height: 0,
    borderTop: "15px solid transparent",
    borderBottom: "15px solid transparent",
    borderLeft: "15px solid rgba(243,139,102, 0.5)",
    cursor: "pointer",
    marginLeft: 20
  }
};

const MonthPicker = () => {
  return (
    <DayPickedContext.Consumer>
      {({ state, changeState }) => {
        return (
          <div style={styles.contentContainer}>
            <div
              style={styles.arrowLeft}
              onClick={() =>
                changeState({
                  ...state,
                  monthChosen: moment(state.monthChosen, "MMM-YYYY")
                    .subtract(1, "months")
                    .format("MMM-YYYY")
                })
              }
            ></div>
            <div style={styles.dateContainer}>
              <p>{state.monthChosen}</p>
            </div>
            <div
              style={styles.arrowRight}
              onClick={() =>
                changeState({
                  ...state,
                  monthChosen: moment(state.monthChosen, "MMM-YYYY")
                    .add(1, "months")
                    .format("MMM-YYYY")
                })
              }
            ></div>
          </div>
        );
      }}
    </DayPickedContext.Consumer>
  );
};

export default MonthPicker;
