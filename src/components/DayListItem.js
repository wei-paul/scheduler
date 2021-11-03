import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": !props.spots,
  });

  const formatSpots = function (props) {
    if (props.spots === 0) {
      return "no spots";
    } else if (props.spots === 1) {
      return "1 spot";
    } else {
      return `${props.spots} spots`;
    }
  };

  return (
    <li
      className={dayClass}
      onClick={() => props.onChange(props.name)}
      selected={props.selected}
      data-testid="day"
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props)} remaining</h3>
    </li>
  );
}
