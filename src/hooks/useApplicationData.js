import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.put(`/api/appointments/${id}`, { interview }).then((res) => {
      console.log(res);
      const days = updateSpots(state, appointments, id);
      setState({
        ...state,
        appointments,
        days,
      });
    });
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.delete(`/api/appointments/${id}`).then((res) => {
      console.log(res);
      const days = updateSpots(state, appointments, id);
      setState({
        ...state,
        appointments,
        days,
      });
    });
  }

  useEffect(() => {
    const daysURL = `/api/days`;
    const daysPromise = axios.get(daysURL);

    const appointmentURL = `/api/appointments`;
    const appointmentPromise = axios.get(appointmentURL);

    const interviewersURL = `/api/interviewers`;
    const interviewersPromise = axios.get(interviewersURL);

    const promises = [daysPromise, appointmentPromise, interviewersPromise];

    Promise.all(promises).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  const setDay = (day) => setState({ ...state, day });

  return { state, setDay, bookInterview, cancelInterview };
}

function updateSpots(state, appointments, id) {
  //**calculate spots
  // find the day Object
  const day = state.days.find((d) => d.name === state.day);

  let spots = 0;
  //iterrate id's -> get appointment object
  for (const id of day.appointments) {
    const appointment = appointments[id];
    if (!appointment.interview) {
      spots++;
    }
  }

  //Deep update
  const newDay = { ...day, spots: spots };

  const newDays = state.days.map((d) => (d.name === state.day ? newDay : d));

  // return days array
  return newDays;
}
