// function selectUserByName(state, name) {
//   const filteredNames = state.users.filter(user => user.name === name);
//   return filteredNames;
// }

// Same function as line 17 with forEach
// export function getAppointmentsForDay(state, day) {
//   let appointmentsArr = [];
//   state.days.map(daysObj => {
//     if (daysObj.name === day) {
//       daysObj.appointments.forEach(apptId => appointmentsArr.push(state.appointments[apptId]))
//     }
//   })
//   return appointmentsArr;
// }

export function getAppointmentsForDay(state, day) {

  let appointmentsArr = [];
  state.days.map(daysObj => {
    if (daysObj.name === day) {
     appointmentsArr = daysObj.appointments.map(apptId => state.appointments[apptId])
    }
  })
  return appointmentsArr;
}

export function getInterviewersForDay(state, day) {

  let interviewersArr = [];
  state.days.map(daysObj => {
    if (daysObj.name === day) {
      interviewersArr = daysObj.appointments.map(x => state.interviewers[x])
      //if something breaks change abovet to state.appointments
    }
  })
  return interviewersArr;
}

export function getInterview(state, interview) {
  //return an object that contains the interview data when passed an obj that contains interviewer
  //interview[interviwer] = interview.interviwer[id]???
  
  let interviewersObj = state.interviewers
  let result = {};

  if (!interviewersObj || !interview) {
    return null;
  }

  result = {
    interviewer: state.interviewers[interview.interviewer],
    student: interview.student}
  return result;
}