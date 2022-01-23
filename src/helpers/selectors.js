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