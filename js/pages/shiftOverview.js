import makeCalendar from "/js/modules/makeCalendar.js";
import EmployeeCollection from "/js/classes/EmployeeCollection.js";
import ShiftCollection from "/js/classes/ShiftCollection.js";

const shiftOverview = ((state) => {
    const shiftCollection = new ShiftCollection();
    const employeeCollection = new EmployeeCollection();

    const calendarOption = {
        defaultView: "week",
        taskView: ["task"],
        useCreationPopup: true,
        useDetailPopup: true,
        template: {
            popupSave: (schedule) => {
                console.log(schedule);
                return "save";
            },
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
            startDayOfWeek: 1,
            narrowWeekend: false,
        },
        week: {
            daynames: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
            startDayOfWeek: 1,
            narrowWeekend: false,
        },
    };
    const mainContainer = document.getElementById("main");
    function generateScaffold(state) {
        mainContainer.innerHTML = `
            <div class="container column">
                <div id="shift-menu">
                <button id="prev-btn" class="button is-info" data-action="move-prev">Previous</button>
                <button id="today-btn" class="button is-info">Today</button>
                <button id="next-btn" class="button is-info">Next</button>
                </div>
                <div id="calendar"></div>
            </div>
            <div class="column is-2"></div>
        `;
    }
    const init = (state) => {
        generateScaffold(state);
        const shifts = shiftCollection.fetchShifts();
        const schedules = [];
        shifts.forEach((shift) => {
            const userObject = employeeCollection.findEmployeeById(
                shift.employeeID
            );
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

        const calendar = makeCalendar(
            document.getElementById("calendar"),
            calendarOption,
            schedules
        );
    };
    return { init };
})();

export default shiftOverview;
