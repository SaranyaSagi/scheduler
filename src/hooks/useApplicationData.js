import { useState, useEffect } from 'react';
import axios from 'axios';

//Custom hook that is imported into application.js
const useApplicationData = () => {

  // This is combining the state for all at once. 
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  //Add websocket to state
  const [socket] = useState(new WebSocket(process.env.REACT_APP_WEBSOCKET_URL))

  const setDay = day => setState({ ...state, day });

  //Promise resolve that makes obtaining all the data in one line and setState
  //prev important to avoid stale state. 
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}))
    });
  }, [])

  //By checking if a apppointment is booked or not using the boolean for isCreation, spots can be updated respectively
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

  // this function gets called in appointment/index inside save and along with required transitions 
  function bookInterview(id, interview) {

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

  //making a put request to server so that it can be updated there as well, update spots will be -1
  return axios
      .put(`/api/appointments/${id}`, 
      {interview : interview})
      .then(() => {
        setState((prev) => ({...prev ,appointments }));
        if (!state.appointments[id].interview) {
          updateSpots(id, true) 
        }
      })   
  }

  //function that gets called inside handleDelete function in appointment/index 
  function cancelInterview(id) {

    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

  //make a delete request and update spots as +1
  return axios
      .delete(`/api/appointments/${id}`)
      .then(() => {
      setState((prev) => ({...prev ,appointments}));
      updateSpots(id, false)
    })
  }

    //new useEffect just for websocket
    useEffect(() => {

      //listener, data has to be parsed, otherwise will get wrong data
      socket.onmessage = event => {
        const data = JSON.parse(event.data);
  
        //important to set state to prev so it doesn't go stale
        // types has to match set interview based on the data that it sends
        if (typeof data === "object" && data.type === "SET_INTERVIEW") {
          setState((prev) => {
            const appointment = {
              ...prev.appointments[data.id],
              interview: data.interview
            };
            const appointments = {
              ...prev.appointments,
              [data.id]: appointment
            };
  
            return {...prev ,appointments}
          });
        }
      };
    })

  return { state, setDay, bookInterview, cancelInterview };
}

export default useApplicationData;