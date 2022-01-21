import React from "react";
import DayListItem from "components/DayListItem.js";

export default function DayList(props) {
  const { days, day, setDay } = props;
  
  // Doing props.days also works
  const parsedDayListItem = days.map((singleDay) => {
    return (
      <DayListItem
        key={singleDay.id}
        name={singleDay.name}
        spots={singleDay.spots}
        selected={singleDay.name === day}
        setDay={setDay}
      />
    );
  })

  return (
    <ul>
      {parsedDayListItem}
    </ul>
  )
}