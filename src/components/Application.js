import React, { useState, useEffect } from "react";
import axios from "axios";
import DayList from "components/DayList";
import Appointment from "components/Appointment";
import { getAppointmentsForDay, getInterview } from "helpers/selectors";
import "components/Application.scss";

export default function Application(props) {

  // const [day, setDay] = useState("Monday");
  // const [days, setDays] = useState([]);
  //The above two lines can be combined into state below

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });

  //removed this before doing promise.all because setState should now be there
  //const setDays = days => setState(prev => ({ ...prev, days }));

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}))
    });
  }, [])

  //console.log(state.interviewers);
  // Accessing the selector function but passing in state.day instead of day because day is now in state
  const dailyAppointments = getAppointmentsForDay(state, state.day)

  const appointment = dailyAppointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);

    //if (interview) {}
      return (
        <Appointment
          key={appointment.id}
          {...appointment}
        />
      ) 
    // else {
    //   return (
    //     <Appointment
    //       key={appointment.id}
    //       {...appointment}
    //       interview={null}
    //     />
    //   )
    // }
  })

  return (
    <main className="layout">
      <section className="sidebar">
      <img
        className="sidebar--centered"
        src="images/logo.png"
        alt="Interview Scheduler"
      />
      <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu">
        <DayList 
          days={state.days}
          value={state.day}
          onChange={setDay}
        />
      </nav>
      <img
        className="sidebar__lhl sidebar--centered"
        src="images/lhl.png"
        alt="Lighthouse Labs"
      />
      </section>
      <section className="schedule">
        {appointment}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
