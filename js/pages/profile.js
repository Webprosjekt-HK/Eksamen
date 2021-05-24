import MakeTile from "/js/modules/MakeTile.js";
import makeCalendar from "/js/modules/MakeCalendar.js";
import ShiftCollection from "/js/classes/ShiftCollection.js";
import EmployeeCollection from "/js/classes/EmployeeCollection.js";

const profile = (() => {
    const shiftCollection = new ShiftCollection();
    const shifts = shiftCollection.fetchShifts();
    const employeeCollection = new EmployeeCollection();

    // The container in the index-file
    const mainElement = document.getElementById("main");
    // Container to hold the cards on the profile-page
    const body = document.createElement("div");
    body.classList.add("container", "columns", "is-multiline");
    body.id = "main-body";
    const calendarOptions = {
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
    };

    const init = (userObject) => {
        // Sets the title for the page
        body.innerHTML = `<h1 class="header column is-12 title">
            ${userObject.firstName + " " + userObject.lastName}
        </h1>`;
        mainElement.innerHTML = "";

        // Container for the calendar
        const calendarDiv = document.createElement("div");
        calendarDiv.id = "calendar";
        calendarDiv.classList.add("column", "is-10");

        // Get the shifts from logged in user, and format them for
        // further use in the calendar. Should probably move this
        const schedules = [];
        shifts
            .filter((s) => s.employeeID === userObject.id)
            .forEach((shift) => {
                schedules.push({
                    id: shift.id,
                    calendarId: "1",
                    title: userObject.firstName + " " + userObject.lastName,
                    category: "time",
                    dueDateClass: "",
                    body: "test",
                    start: shift.start,
                    end: shift.end,
                });
            });

        mainElement.append(body);
        mainElement.append(calendarDiv);
        // Gets the object reference to the calendar back from the
        // function-call. Might get usefull
        const calendar = makeCalendar(calendarDiv, calendarOptions, schedules);

        // Legg til tiles
        const makeTile = new MakeTile("main-body");
        const nextShift = shiftCollection.getNextShiftByUserId(userObject.id);
        makeTile.apply("Ikon", "Neste vakt", nextShift.toUTCString(), "is-3");
        for (let i = 0; i < 2; i++) {
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
