import MakeTile from "/js/modules/MakeTile.js";

const profile = (() => {
    const body = document.createElement("div");
    body.classList.add("container", "columns", "is-multiline");
    body.id = "main-body";
    const Calendar = tui.Calendar;

    const init = (userObject) => {
        body.innerHTML = `<h1 class="header column is-12 title">
            ${userObject.firstName + " " + userObject.lastName}
        </h1>`;
        const mainElement = document.getElementById("main");
        mainElement.innerHTML = "";

        const calendarDiv = document.createElement("div");
        calendarDiv.id = "calendar";
        calendarDiv.classList.add("column", "is-10");

        mainElement.append(body);
        mainElement.append(calendarDiv);
        var calendar = new tui.Calendar(calendarDiv, {
            defaultView: "month",
            scheduleView: true, // Can be also ['allday', 'time']
            template: {
                milestone: function (schedule) {
                    return (
                        '<span style="color:red;"><i class="fa fa-flag"></i> ' +
                        schedule.title +
                        "</span>"
                    );
                },
                milestoneTitle: function () {
                    return "Milestone";
                },
                task: function (schedule) {
                    return "&nbsp;&nbsp;#" + schedule.title;
                },
                taskTitle: function () {
                    return '<label><input type="checkbox" />Task</label>';
                },
                allday: function (schedule) {
                    return schedule.title + ' <i class="fa fa-refresh"></i>';
                },
                alldayTitle: function () {
                    return "All Day";
                },
                time: function (schedule) {
                    return (
                        schedule.title +
                        ' <i class="fa fa-refresh"></i><br />' +
                        new Date(schedule.start).getHours() +
                        " - " +
                        new Date(schedule.end).getHours()
                    );
                },
            },
            month: {
                daynames: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
                startDayOfWeek: 0,
                narrowWeekend: true,
            },
            week: {
                daynames: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
                startDayOfWeek: 0,
                narrowWeekend: true,
            },
        });

        // Mal for å lage vakter:
        // console.log(new Date().toISOString());
        calendar.clear();
        calendar.createSchedules(
            [
                {
                    id: "3",
                    calendarId: "1",
                    title: "Ola Nordmann",
                    category: "time",
                    dueDateClass: "",
                    body: "Dett er en test",
                    start: "2021-05-24T10:30:00",
                    end: "2021-05-24T12:30:00",
                },
                {
                    id: "4",
                    calendarId: "1",
                    title: "Christian Gregersen",
                    category: "time",
                    dueDateClass: "",
                    body: "",
                    start: "2021-05-25T08:30:00",
                    end: "2021-05-25T16:30:00",
                },
            ],
            false
        );
        calendar.render();
        let schedule = calendar.getSchedule("3", "1");
        console.log(schedule);

        // Legg til tiles
        let makeTile = new MakeTile("main-body");
        for (let i = 0; i < 3; i++) {
            makeTile.apply(
                "ikon",
                `headertest ${i + 1}`,
                `bodytest ${i + 1}`,
                "is-3"
            );
        }
    };
    return { init };
})();

export default profile;
