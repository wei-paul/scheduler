import React from 'react';
import DayListItem from 'components/DayListItem.js';

export default function DayList(props){
  
  const listDays = props.days.map((day) => {
    return (
      <DayListItem
        key={day.id}
        name={day.name}
        spots={day.spots}
        selected={day.name === props.value}
        onChange={props.onChange}

      />
    );
  });


  return(
    <ul>
      {listDays} 
    </ul>
  )
}
