import React, { useState } from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");
  console.log("===========>", props )
  
  const reset = function() {
    setStudent("");
    setInterviewer("");
  }

  const cancel = function() {
    reset();
    props.onCancel();
    // should it be props.onCancel()
  }

  function validate() {
    if (student === "") {
      setError("Student name cannot be blank");
      return;
    }

    if (!interviewer) {
      setError("Must select an interviewer");
      return;
    }
  
    setError("");
    props.onSave(student, interviewer);
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form onSubmit={event => event.preventDefault()} autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            onChange={(event) => setStudent(event.target.value)}
            value={student}
            data-testid="student-name-input"
          />
          <section className="appointment__validation">{error}</section>
        </form>
        <InterviewerList 
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={event => cancel()}>Cancel</Button>
          <Button confirm onClick={validate}>Save</Button>
        </section>
      </section>
    </main>
  );
}

//Add this to body of form component
// function validate() {
//   if (name === "") {
//     setError("Student name cannot be blank");
//     return;
//   }

//   props.onSave(name, interviewer);
// }

//const [error, setError] = useState("");