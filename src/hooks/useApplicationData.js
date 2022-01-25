import { useState, useEffect } from 'react';
import axios from 'axios';

const useApplicationData = () => {
  
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });

  function updateSpots(id, isCreation) {
    //getting the day
    const day = state.days.find(day => day.appointments.includes(id));
    
    // isCreation is referring to the appointment creation, if booked -1, if cancelled +1
    const newDay = {...day, spots: day.spots + (isCreation ? -1 : 1)}
    
    const newDaysArr = state.days.map((day)=> {
      if (day.id === newDay.id) {
        return newDay
      } else {
        return day
      }
    })

    setState((prev) => ({...prev, days: newDaysArr}))
  }


  function bookInterview(id, interview) {

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

  return axios
      .put(`/api/appointments/${id}`, 
      {interview : interview})
      .then(() => {
        setState((prev) => ({...prev ,appointments }));
        updateSpots(id, true) 
      })   
  }

  function cancelInterview(id) {

    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

  return axios
      .delete(`/api/appointments/${id}`)
      .then(() => {
      setState((prev) => ({...prev ,appointments}));
      updateSpots(id, false)
    })
  }

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}))
    });
  }, [])

  return { state, setDay, bookInterview, cancelInterview };
}

export default useApplicationData;
