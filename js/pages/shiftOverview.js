import makeCalendar from "/js/modules/makeCalendar.js";
import EmployeeCollection from "/js/classes/EmployeeCollection.js";
import ShiftCollection from "/js/classes/ShiftCollection.js";

const shiftOverview = ((state) => {
    const shiftCollection = new ShiftCollection();
    const employeeCollection = new EmployeeCollection();

    const calendarOption = {
        defaultView: "week",
        taskView: ["task"],
        useCreationPopup: false,
        useDetailPopup: false,
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
    function generatePopupMenu(users, schedule, update) {
        const containerElement = document.createElement("div");

        const htmlContent = `
            <nav class="panel is-primary">
                
                <p class="panel-heading">Legg til vakt</p>
                <div class="panel-block">
                    <div class="control has-icons-left">
                        <div class="select">
                            <select>
                                ${users.map((e) => {
                                    return (
                                        '<option value="' +
                                        e.id +
                                        '">' +
                                        e.firstName +
                                        " " +
                                        e.lastName +
                                        "</option>"
                                    );
                                })}
                            </select>
                        </div>
                        <span class="icon is-left">
                            <i class="fas fa-search" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
                <div class="panel-block">
                    <div class="control has-icons-left">
                        <div
                            class="
                            tui-datepicker-input
                            tui-datetime-input
                            tui-has-focus
                        "
                        >
                            <input
                                type="text"
                                id="datepicker-start-target"
                                aria-label="Date-Time"
                            />
                            <span class="tui-ico-date"></span>
                        </div>
                        <div id="datepicker-start" class="control"></div>
                    </div>
                </div>
                <div class="panel-block">
                    <div class="control has-icons-left">
                        <div
                            class="
                            tui-datepicker-input
                            tui-datetime-input
                            tui-has-focus
                        "
                        >
                            <input
                                type="text"
                                id="datepicker-end-target"
                                aria-label="Date-Time"
                            />
                            <span class="tui-ico-date"></span>
                        </div>
                        <div id="datepicker-end" class="control"></div>
                    </div>
                </div>
                <div class="panel-block">
                    <div class="control has-icons-left">
                        <button class="button is-primary">Legg til</button>
                    </div>
                </div>
            </nav>
        `;

        containerElement.innerHTML = htmlContent;
        const picker1 = new tui.DatePicker(
            containerElement.querySelector("#datepicker-start"),
            {
                input: {
                    element: containerElement.querySelector(
                        "#datepicker-start-target"
                    ),
                },
            }
        );
        const picker2 = new tui.DatePicker(
            containerElement.querySelector("#datepicker-end"),
            {
                input: {
                    element: containerElement.querySelector(
                        "#datepicker-end-target"
                    ),
                },
            }
        );
        if (update) {
            picker1.setDate(new Date(schedule.schedule.start));
            picker2.setDate(new Date(schedule.schedule.end));
            containerElement.querySelector(".button").innerHTML = "Oppdater";
        }
        return containerElement;
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
                employeeID: shift.employeeID,
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
        calendar.on({
            clickSchedule: function (e) {
                console.log("clickSchedule", e);
                const popupBar = generatePopupMenu(
                    employeeCollection.fetchEmployees(),
                    e,
                    true
                );
                mainContainer.append(popupBar);
            },
            beforeCreateSchedule: function (e) {
                console.log("beforeCreateSchedule", e);
                // open a creation popup
            },
            beforeUpdateSchedule: function (e) {
                console.log("beforeUpdateSchedule", e);
                e.schedule.start = e.start;
                e.schedule.end = e.end;

                cal.updateSchedule(
                    e.schedule.id,
                    e.schedule.calendarId,
                    e.schedule
                );
            },
            beforeDeleteSchedule: function (e) {
                console.log("beforeDeleteSchedule", e);
                cal.deleteSchedule(e.schedule.id, e.schedule.calendarId);
            },
        });
    };
    return { init };
})();

export default shiftOverview;
