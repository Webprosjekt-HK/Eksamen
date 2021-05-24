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
        mainElement.innerHTML = `
            <div
                id="outer-shift-container"
                class="column is-9"
                id="outer-shift-container"
            >
                <div class="columns is-multiline">
                    <h1 class="header column is-12 title">
                        ${userObject.firstName + " " + userObject.lastName}
                    </h1>
                    <div class="column is-12">
                        <div class="columns is-multiline" id="work-info">
                        </div>
                    </div>
                    <div class="column is-12" id="outer-calendar">
                        <div class="container" id="calendar"></div>
                    </div>
                </div>
            </div>
            <div id="profile-info" class="column is-3">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-3by3">
                        <img src="${
                            userObject.pictureUrl
                        }" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                        
                        <div class="media-content">
                            <p class="title is-4">${
                                userObject.firstName + " " + userObject.lastName
                            }</p>
                            <p class="subtitle is-6">${userObject.role}</p>
                        </div>
                        </div>

                        <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a href="#">#css</a> <a href="#">#responsive</a>
                        <br>
                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                    </div>
                    </div>
            </div>
        `;

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

        // Gets the object reference to the calendar back from the
        // function-call. Might get usefull
        const calendar = makeCalendar(
            document.getElementById("calendar"),
            calendarOptions,
            schedules
        );

        // Legg til tiles
        const makeTile = new MakeTile("work-info");
        const nextShift = shiftCollection.getNextShiftByUserId(userObject.id);
        const hoursWorked = shiftCollection.getHoursWorkedByUserId(
            userObject.id
        );
        const today = new Date();
        const previousMonth = new Date();
        previousMonth.setMonth(today.getMonth() - 1);
        const lastPaycheck = today.getDate() >= 15 ? today : previousMonth;

        console.log(lastPaycheck);
        makeTile.apply(
            "Ikon",
            "Neste vakt",
            nextShift.toLocaleString("nb-NO", {
                weekday: "long",
                month: "long",
                day: "numeric",
            }),
            "is-4"
        );
        makeTile.apply("Ikon", "Timer jobbet", hoursWorked, "is-4");
        makeTile.apply(
            "Ikon",
            "Siste lønnsslipp",
            "15. " +
                lastPaycheck.toLocaleString("nb-NO", { month: "long" }) +
                "." +
                today.getFullYear(),
            "is-4"
        );
    };
    return { init };
})();

export default profile;
