import React from "react";
import moment from "moment";

import { DayPickedContext } from "components/books/details/planning/dayPicked-context";

const styles = {
  contentContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginTop: 50
  },
  dateContainer: {
    fontSize: "1.5rem"
  }
};

const MonthPicker = () => {
  return (
    <DayPickedContext.Consumer>
      {({ state, changeState }) => {
        return (
          <div style={styles.contentContainer}>
            <div
              onClick={() =>
                changeState({
                  ...state,
                  monthChosen: moment(state.monthChosen)
                    .subtract(1, "months")
                    .format("MMM-YYYY")
                })
              }
            >
              Left
            </div>
            <div style={styles.dateContainer}>
              <p>{state.monthChosen}</p>
            </div>
            <div
              onClick={() =>
                changeState({
                  ...state,
                  monthChosen: moment(state.monthChosen)
                    .add(1, "months")
                    .format("MMM-YYYY")
                })
              }
            >
              Right
            </div>
          </div>
        );
      }}
    </DayPickedContext.Consumer>
  );
};

export default MonthPicker;
