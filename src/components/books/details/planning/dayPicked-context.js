import React from "react";

export const DayPickedContext = React.createContext({
  dayPicked: 1,
  monthChosen: "MMM-YYYY",
  boxChosen: "",
  plannedDate: "",
  dateChosen: "",
  changeState: () => {}
});
