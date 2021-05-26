import { Employee } from "/js/classes/Person.js";
import Shift from "/js/classes/Shift.js";
import Department from "/js/classes/Department.js";

const employees = [
    new Employee(
        1,
        "Kjøkkensjef",
        45533312,
        "Ola",
        "Nordmann",
        "ola@gylnepizza.no",
        "1234",
        "pizzaveien 1",
        420000,
        "images/ansatt_1.png",
        [1, 2, 3, 4],
        [1, 2, 3, 4]
    ),
    new Employee(
        2,
        "Soussjef",
        45533312,
        "Gjerdmunn",
        "Hanssen",
        "gjerdmunn@gylnepizza.no",
        "1234",
        "pizzaveien 1",
        420000,
        "images/ansatt_2.png",
        [1, 2, 3, 4],
        [1, 2, 3, 4]
    ),
    new Employee(
        3,
        "Pizzakokk",
        45533312,
        "Brage",
        "Morgenstierne",
        "brage@gylnepizza.no",
        "1234",
        "pizzaveien 1",
        420000,
        "images/ansatt_3.png",
        [1, 2, 3, 4],
        [1, 2, 3, 4]
    ),
    new Employee(
        4,
        "Pizzakokk",
        45533312,
        "Hege",
        "Svendsen",
        "hege@gylnepizza.no",
        "1234",
        "pizzaveien 1",
        420000,
        "images/ansatt_4.png",
        [1, 2, 3, 4],
        [1, 2, 3, 4]
    ),
];
const shifts = [
    new Shift(
        "2-2021-05-02T08:30:00",
        "2021-05-02T08:30:00",
        "2021-05-02T16:30:00",
        1,
        2
    ),
    new Shift(
        "1-2021-05-25T08:30:00",
        "2021-05-25T08:30:00",
        "2021-05-25T16:30:00",
        1,
        1
    ),
    new Shift(
        "2-2021-05-26T08:30:00",
        "2021-05-26T08:30:00",
        "2021-05-26T16:30:00",
        1,
        2
    ),
    new Shift(
        "3-2021-05-27T08:30:00",
        "2021-05-27T08:30:00",
        "2021-05-27T16:30:00",
        1,
        3
    ),
    new Shift(
        "4-2021-05-28T08:30:00",
        "2021-05-28T08:30:00",
        "2021-05-28T16:30:00",
        1,
        4
    ),
    new Shift(
        "1-2021-05-29T08:30:00",
        "2021-05-29T08:30:00",
        "2021-05-29T16:30:00",
        1,
        1
    ),
    new Shift(
        "1-2021-05-22T08:30:00",
        "2021-05-22T08:30:00",
        "2021-05-22T16:30:00",
        1,
        1
    ),
    new Shift(
        "1-2021-05-21T08:30:00",
        "2021-05-21T08:30:00",
        "2021-05-21T16:30:00",
        1,
        1
    ),
    new Shift(
        "2-2021-06-01T08:30:00",
        "2021-06-01T08:30:00",
        "2021-06-01T16:30:00",
        1,
        2
    ),
    new Shift(
        "2-2021-06-02T08:30:00",
        "2021-06-02T08:30:00",
        "2021-06-02T16:30:00",
        1,
        2
    ),
    new Shift(
        "3-2021-06-03T08:30:00",
        "2021-06-03T08:30:00",
        "2021-06-03T16:30:00",
        1,
        3
    ),
];
const departments = [
    new Department(
        1,
        "Oslo - Majorstuen",
        "Majagata 17, 3232 Oslo",
        "06:00 - 23:00",
        "10:00 - 03:00",
        "+47 303030",
        "post@gylnepizza.no",
        "majorstuen.png"
    ),
    new Department(
        2,
        "Oslo - Storo",
        "GSV 666, 4825 Oslo",
        "06:00 - 23:00",
        "10:00 - 03:00",
        "+47 404040",
        "post@gylnepizza.no",
        "storo.png"
    ),
    new Department(
        3,
        "Oslo - Skippergata",
        "Skippergata, 1111 Oslo",
        "06:00 - 23:00",
        "10:00 - 03:00",
        "+47 505050",
        "post@gylnepizza.no",
        "skippergata.png"
    ),
    new Department(
        4,
        "Oslo - Ensjø",
        "Ensjøveien 33, 9292 Oslo",
        "06:00 - 23:00",
        "10:00 - 03:00",
        "+47 606060",
        "post@gylnepizza.no",
        "ensjo.png"
    ),
];

export function saveEmployees() {
    if (localStorage.getItem("employees")) return;
    localStorage.setItem("employees", JSON.stringify(employees));
    window.location.reload();
}

export function saveDepartments() {
    localStorage.setItem("departments", JSON.stringify(departments));
}

export function saveShifts() {
    if (localStorage.getItem("shifts")) return;
    localStorage.setItem("shifts", JSON.stringify(shifts));
    window.location.reload();
}
