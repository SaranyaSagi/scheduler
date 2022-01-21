import React from "react";
import InterviewerListItem from "components/InterviewerListItem.js";

import "components/InterviewerList.scss";

export default function InterviewerList (props) {
  const { interviewers, interviewer, setInterviewer } = props;

  const parsedInterviewerListItem = interviewers.map((singleInterview) => {
    return (
      <InterviewerListItem
        key={singleInterview.id}
        name={singleInterview.name}
        avatar={singleInterview.avatar}
        selected={singleInterview.id === interviewer}
        setInterviewer={()=>props.setInterviewer(singleInterview.id)}
      />
    );
  })

  return(
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{parsedInterviewerListItem}</ul>
    </section>
  )
}