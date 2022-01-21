import React from "react";
import DayListItem from "components/DayListItem.js";

export default function DayList(props) {
  // changed day to value and setDay to onChange to reflect application.js
  const { days, value, onChange } = props;
  
  // Doing props.days also works
  const parsedDayListItem = days.map((singleDay) => {
    return (
      <DayListItem
        key={singleDay.id}
        name={singleDay.name}
        spots={singleDay.spots}
        selected={singleDay.name === value}
        setDay={onChange}
      />
    );
  })

  return (
    <ul>
      {parsedDayListItem}
    </ul>
  )
}