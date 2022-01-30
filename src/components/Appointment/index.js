import React, { useEffect } from "react";

import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

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

  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

  //Transition to show only if props.interview exists otherwise it should be empty
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  //Adding this to make websockets transitions work 
  //specifically to handle book interview and cancel interview.
  useEffect(() => {
    if (props.interview && mode === EMPTY) {
     transition(SHOW);
    }
    if (props.interview === null && mode === SHOW) {
     transition(EMPTY);
    }
   }, [props.interview, transition, mode]);

  //handles save click, and transitions associted with it but some transitions also handled through MODE
  function save(name, interviewer) {
      const interview = {
        student: name,
        interviewer: interviewer
      };
      
      transition(SAVING)
      
      props.bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      //handle browser error, boolean is important, tested using node-env server(scheduler-api has built in function that takes care of this)
      .catch(error => transition(ERROR_SAVE, true))            
  }

  //handles delete using cancelInterview and transitions but some transitions also handled through mode below
  function handleDelete() {

      transition(DELETING, true)
      
      props.cancelInterview(props.id)
      .then(() => transition(EMPTY))
      //handle browser error, boolean is important, tested using node-env server(scheduler-api has built in function that takes care of this)
      .catch(error => transition(ERROR_DELETE, true))      
  }

  //function to handle close clicks. 
  function errorClose () {
    back();
  }

  const interviewers = props.interviewers
  return (
    <article className="appointment">
      <Header time={props.time}/>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && props.interview && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />
      )}
      {mode === DELETING && (<Status message={'Deleting'}/>)}
      {mode === CONFIRM && (<Confirm message={"Are you sure you want to delete?"} onConfirm={handleDelete} onCancel={back}/>)}
      {mode === SAVING && (<Status message={'SAVING'} />)} 
      {mode === CREATE && (<Form interviewers={interviewers} onSave={save} onCancel={back}/>)}
      {mode === EDIT && (
        <Form 
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
          onCancel={back}
          onSave={save}
          interviewers={interviewers}
        />)}
        {mode === ERROR_SAVE && 
          <Error 
            message = "The appointment was not able to be saved, sorry!"
            onClose = {errorClose}
          />}
        {mode === ERROR_DELETE && 
          <Error 
            message = "The appointment was not able to be deleted, sorry!"
            onClose = {errorClose}
          />}
    </article>
  ); 
}