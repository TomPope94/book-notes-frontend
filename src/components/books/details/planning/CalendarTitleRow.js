import React, { Fragment } from "react";
import uuid from "uuid";

const styles = {
  titlesContainer: {
    display: "flex"
  },
  daysTitle: {
    border: "1px solid #fff",
    width: "14.286%",
    display: "flex",
    justifyContent: "center",
    background: "#f38b66",
    color: "#fff",
    fontSize: "1.25rem"
  }
};

const CalendarTitleRow = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  let renderedDays = [];
  for (let i = 0; i < days.length; i++) {
    renderedDays.push(
      <div key={uuid.v4()} style={styles.daysTitle}>
        {days[i]}
      </div>
    );
  }

  return <div style={styles.titlesContainer}>{renderedDays}</div>;
};

export default CalendarTitleRow;
