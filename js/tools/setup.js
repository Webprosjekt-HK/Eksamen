import { Employee } from "/js/classes/Person.js";
import Shift from "/js/classes/Shift.js";

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
        "Kjøkkensjef",
        45533312,
        "Gjerdmunn",
        "Hanssen",
        "gjerdmunn@gylnepizza.no",
        "1234",
        "pizzaveien 1",
        420000,
        "images/picture.jpg",
        [1, 2, 3, 4],
        [1, 2, 3, 4]
    ),
    new Employee(
        3,
        "Kjøkkensjef",
        45533312,
        "Brage",
        "Morgenstierne",
        "brage@gylnepizza.no",
        "1234",
        "pizzaveien 1",
        420000,
        "images/picture.jpg",
        [1, 2, 3, 4],
        [1, 2, 3, 4]
    ),
    new Employee(
        4,
        "Kjøkkensjef",
        45533312,
        "Hege",
        "Svendsen",
        "hege@gylnepizza.no",
        "1234",
        "pizzaveien 1",
        420000,
        "images/picture.jpg",
        [1, 2, 3, 4],
        [1, 2, 3, 4]
    ),
];
const shifts = [
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
];
const departments = [{}];

export function saveEmployees() {
    if (localStorage.getItem("employees")) return;
    localStorage.setItem("employees", JSON.stringify(employees));
}

export function saveDepartments() {
    localStorage.setItem("departments", JSON.stringify(departments));
}

export function saveShifts() {
    if (localStorage.getItem("shifts")) return;
    localStorage.setItem("shifts", JSON.stringify(shifts));
}
