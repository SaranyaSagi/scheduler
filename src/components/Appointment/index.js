import React, { Fragment } from "react";

import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";

import useVisualMode from "hooks/useVisualMode";

import "components/Appointment/styles.scss";

export default function Appointment(props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const CONFIRM = "CONFIRM";
  const DELETING = "DELETING";
  const EDIT = "EDIT";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer: interviewer
    };
    transition(SAVING)
    props.bookInterview(props.id, interview)
    .then(() => transition(SHOW))
  }

  function handleDelete() {
    transition(DELETING)
    props.cancelInterview(props.id)
    .then(() => transition(EMPTY))
  }

  const interviewers = props.interviewers
  return (
    <article className="appointment">
      <Header time={props.time}/>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />
      )}
      {mode === DELETING && (<Status message={'Deleting'}/>)}
      {mode === CONFIRM && (<Confirm message={"Are you sure you want to delete?"} onConfirm={handleDelete} onCancel={() => back()}/>)}
      {mode === SAVING && (<Status message={'SAVING'} />)} 
      {mode === CREATE && (<Form interviewers={interviewers} onSave={save} onCancel={() => back()}/>)}
      {mode === EDIT && (
        <Form 
          name={props.student}
          interview={props.interview}
          onCancel={back}
          onSave={save}
          interviewers={interviewers}
        />)}
    </article>
  ); 
}

//{props.time ? `Appointment at ${props.time}` : "No Appointments" }