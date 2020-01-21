import React, { useState, useContext, useEffect } from "react";
import moment from "moment";
import { connect } from "react-redux";

import { DayPickedContext } from "components/books/details/planning/dayPicked-context";
import { updatePlannedDate } from "actions/books/books";

const DayBox = ({
  id,
  date,
  monthChosen,
  setDay,
  updatePlannedDate,
  selectedBook
}) => {
  const [hover, setHover] = useState(false);
  const [plannedDate, setPlannedDate] = useState(false);
  let pickedContext = useContext(DayPickedContext);
  const { boxChosen } = pickedContext.state;
  useEffect(() => {
    if (selectedBook.datePlanned) {
      const dateChosen = moment(
        `${moment(monthChosen, "MMM-YYYY").format("YYYY-MM")}-${date}`,
        "YYYY-MM-DD"
      ).format("YYYYMMDD");

      if (selectedBook.datePlanned.toString() === dateChosen.toString()) {
        setPlannedDate(true);
      }
    }
  }, []);

  let backgroundVar;
  if (hover && typeof date === "number") {
    backgroundVar = "#f38b66";
  } else if (boxChosen === id || plannedDate) {
    backgroundVar = "rgba(243,139,102, 0.5)";
  } else if (
    date === moment().date() &&
    moment().month() === moment(monthChosen, "MMM-YYYY").month() &&
    moment().year() === moment(monthChosen, "MMM-YYYY").year()
  ) {
    backgroundVar = "rgba(243, 139, 102, 0.25)";
  } else if (typeof date !== "number") {
    backgroundVar = "rgba(243, 139, 102, 0.1)";
  } else {
    backgroundVar = "#fff";
  }

  const styles = {
    box: {
      flexGrow: 1,
      width: "14.286%",
      cursor: typeof date === "number" ? "pointer" : "auto",
      pointerEvents: typeof date !== "number" ? "none" : "auto",
      background: backgroundVar,
      display: "flex",
      padding: 10,
      fontSize: "1.25rem",
      color: "#004757"
    }
  };

  const handleClick = () => {
    const dateChosen = moment(
      `${moment(monthChosen, "MMM-YYYY").format("YYYY-MM")}-${date}`,
      "YYYY-MM-DD"
    ).format("YYYYMMDD");

    pickedContext.changeState({
      ...pickedContext.state,
      dayPicked: date,
      boxChosen: id,
      dateChosen: dateChosen
    });

    updatePlannedDate(selectedBook.bookId, dateChosen);
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
    </div>
  );
};

const mapStateToProps = state => ({
  selectedBook: state.books.selectedBook
});

export default connect(mapStateToProps, { updatePlannedDate })(DayBox);
