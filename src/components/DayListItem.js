import React from "react";
import classNames from "classnames";

import "components/DayListItem.scss";

export default function DayListItem(props) {
  
  //This function is needed to handle the different spots conditions and send appropriate message"
  const formatSpots = (spots) => {
    if (spots === 0) {
      return `no spots remaining`;
    }
    
    if (spots === 1) {
      return `${spots} spot remaining`;
    }

    return `${spots} spots remaining`;
  }
  
  //ClassNames library can be used where 1 out of 2 classes has to be selected.
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": (!props.spots)
  });
  return (
    <li
      className={dayClass}
      onClick={() => props.setDay(props.name)}
      data-testid="day"
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}