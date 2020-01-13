import React, { useState, useContext } from "react";
import moment from "moment";

import { DayPickedContext } from "components/books/details/planning/dayPicked-context";

const DayBox = ({ id, date, monthChosen, dayPicked, setDay }) => {
  const [hover, setHover] = useState(false);
  let pickedContext = useContext(DayPickedContext);
  const { dateChosen, boxChosen } = pickedContext.state;

  let backgroundVar;
  if (hover && typeof date === "number") {
    backgroundVar = "#f38b66";
  } else if (boxChosen === id) {
    backgroundVar = "rgba(243,139,102, 0.5)";
  } else if (
    date === moment().date() &&
    moment().month() === moment(monthChosen).month() &&
    moment().year() === moment(monthChosen).year()
  ) {
    backgroundVar = "rgba(243, 139, 102, 0.25)";
  } else if (typeof date !== "number") {
    backgroundVar = "rgba(243, 139, 102, 0.1)";
  } else {
    backgroundVar = "#fff";
  }

  const styles = {
    box: {
      border: "1px solid rgba(243, 139, 102, 0.5)",
      flexGrow: 1,
      width: "14.286%",
      cursor: typeof date === "number" ? "pointer" : "auto",
      background: backgroundVar,
      display: "flex",
      padding: 10,
      fontSize: "1.25rem",
      color: "#004757"
    }
  };

  const handleClick = () => {
    pickedContext.changeState({
      ...pickedContext.state,
      dayPicked: date,
      boxChosen: id,
      dateChosen: moment(
        `${moment(monthChosen).format("YYYY-MM")}-${date}`
      ).format("Do MMM YYYY")
    });

    setDay(date);
  };

  return (
    <div
      style={styles.box}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onClick={() => handleClick()}
    >
      {date}
      {/* {chosen ? <h4>Chosen</h4> : null} */}
    </div>
  );
};

export default DayBox;
