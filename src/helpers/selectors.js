//In this function mapping through days object and returning an array for appointment id.
export function getAppointmentsForDay(state, day) {

  let appointmentsArr = [];
  state.days.map(daysObj => {
    if (daysObj.name === day) {
     appointmentsArr = daysObj.appointments.map(apptId => state.appointments[apptId])
    }
  })
  return appointmentsArr;
}

//In this function mapping through days object and returning an array for interviewers.
export function getInterviewersForDay(state, day) {

  let interviewersArr = [];
  state.days.map(daysObj => {
    if (daysObj.name === day) {
      interviewersArr = daysObj.appointments.map(interviewData => state.interviewers[interviewData])
    }
  })
  return interviewersArr;
}

//returning an object that contains the interview data when passed an obj that contains interviewer
export function getInterview(state, interview) {
  
  let interviewersObj = state.interviewers
  let result = {};

  //Very important, it has to return null if object or interview doesn't exist.
  if (!interviewersObj || !interview) {
    return null;
  }

  result = {
    interviewer: state.interviewers[interview.interviewer],
    student: interview.student}

  return result;
}