function selectUserByName(state, name) {
  const filteredNames = state.users.filter(user => user.name === name);
  return filteredNames;
}

// export function getAppointmentsForDay(state, day) {
//   const filteredAppointments = state.days.map(daysObj => daysObj.day === day);
//   return filteredAppointments;
// }

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