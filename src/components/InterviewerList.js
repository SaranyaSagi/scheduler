import React from "react";
import PropTypes from 'prop-types';
import InterviewerListItem from "components/InterviewerListItem.js";

import "components/InterviewerList.scss";

export default function InterviewerList (props) {
  const { interviewers, value, onChange } = props;

  //pass this in to ul inside return section
  const parsedInterviewerListItem = interviewers.map((singleInterview) => {
    return (
      <InterviewerListItem
        key={singleInterview.id}
        id={singleInterview.id}
        name={singleInterview.name}
        avatar={singleInterview.avatar}
        selected={singleInterview.id === value}
        setInterviewer={() => onChange(singleInterview.id)}
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

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};
