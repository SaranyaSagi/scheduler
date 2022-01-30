//In this function mapping through days object and returning an array for appointment id.
export function getAppointmentsForDay(state, day) {
  //found can be used to first isolate all the data where day = name
  const found = state.days.find(d => day === d.name);

  // need this for 6th hidden undefined slot and doesnt replace the whole array with undefined. 
  if (state.days.length === 0 || found === undefined) return [];

  //retirn just the appointments for that day
  return found.appointments.map(id => state.appointments[id]);
}

//In this function mapping through days object and returning an array for interviewers.
export function getInterviewersForDay(state, day) {
  //found can be used to first isolate all the data where day = name
  const found = state.days.find(d => day === d.name);

  // This helps with dealing the 6th hidden undefined slot and doesnt replace the whole array with undefined. 
  if (state.days.length === 0 || found === undefined) return [];

  //return just the interviewers for that day
  return found.interviewers.map(id => state.interviewers[id]);
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

///Old appointments selector
 // let appointmentsArr = [];
  // state.days.map(daysObj => {
  //   if (daysObj.name === day) {
  //    appointmentsArr = daysObj.appointments.map(apptId => state.appointments[apptId])
  //   }
  // })
  // return appointmentsArr;

//Old interviewers selector
//This original below function is returning undefined for Wed, Thurs, Fri
  // let interviewersArr = [];
  // state.days.map(daysObj => {if (daysObj.name === day) {
  //     interviewersArr = daysObj.appointments.map(interviewData => state.interviewers[interviewData])}
  // })
  // return interviewersArr;