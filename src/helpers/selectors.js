export function getAppointmentsForDay(state, day) {
  const filteredApts = [];
  const [apptIdsForDay] = state.days.filter(
    (currentDay) => currentDay.name === day
  );

  if (apptIdsForDay) {
    for (const apptId of apptIdsForDay.appointments) {
      for (const appt in state.appointments) {
        if (apptId === state.appointments[appt].id) {
          filteredApts.push(state.appointments[appt]);
        }
      }
    }
  }
  return filteredApts;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  return {
    ...interview,
    interviewer: state.interviewers[interview.interviewer],
  };
}

export function getInterviewersForDay(state, day) {
  const selectedDay = state.days.filter((d) => d.name === day);
  if (selectedDay.length === 0) {
    return [];
  }
  const interviewers = [];
  for (let interviewerId of selectedDay[0].interviewers) {
    interviewers.push(state.interviewers[interviewerId]);
  }
  return interviewers;
}
