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
        const calendar = new Calendar("#calendar", {
            defaultView: "month",
            taskView: true,
            disableDblClick: true,
            disableClick: true,
            calendars: [
                {
                    id: "1",
                    name: "shifts",
                },
            ],
        });

        // Mal for å lage vakter:
        // console.log(new Date().toISOString());
        calendar.createSchedules([
            {
                id: "1",
                calendarId: "1",
                title: "Ola Nordmann",
                category: "",
                dueDateClass: "",
                start: "2021-05-24T09:18:54.621",
                end: "2021-05-24T21:18:54.621",
                body: "test",
                category: "shift",
            },
        ]);
        calendar.render();
        console.log(calendar);
        let schedule = calendar.getSchedule("1", "1");
        console.log(schedule);
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
