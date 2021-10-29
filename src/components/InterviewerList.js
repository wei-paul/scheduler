import React from 'react';
import InterviewerListItem from 'components/InterviewerListItem';
import classNames from "classnames";
import "components/InterviewerList.scss";

export default function InterviewerList(props){

  const interviewers = props.interviewers.map((interviewer) => {
    console.log("props.value is:", props.value)
    console.log("interviewerID is:", interviewer.id)
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.value}
        setInterviewer={() => props.onChange(interviewer.id)}
      />
    );
  });

  return(
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewers</h4>
      <ul className="interviewers__list">
      {interviewers}
      </ul>
      
    </section>
  )
}