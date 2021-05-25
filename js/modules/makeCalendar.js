const makeCalendar = (element, options, schedules) => {
    const calendar = new tui.Calendar(element, options);

    // Mal for å lage vakter:
    // console.log(new Date().toISOString());
    calendar.clear();
    calendar.createSchedules(schedules);

    let schedule = calendar.getSchedule("3", "1");
    console.log(schedule);
    return calendar;
};

export default makeCalendar;
