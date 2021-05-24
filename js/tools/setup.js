import Department from "/js/classes/Department.js";
import { Employee } from "/js/classes/Person.js";
import Shift from "/js/classes/Shift.js";

const employees = [
    new Employee(
        1,
        "Kjøkkensjef",
        "+47 45533312",
        "Ola",
        "Nordmann",
        "ola@gylnepizza.no",
        "1234",
        "pizzaveien 1",
        420000,
        "images/picture.jpg",
        [1, 2, 3, 4],
        [1, 2, 3, 4]
    ),
    new Employee(
        2,
        "Kjøkkensjef",
        "+47 45533312",
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
        "+47 45533312",
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
        "+47 45533312",
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
<<<<<<< Updated upstream
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
=======

const departments = [
    new Department(
        1,
        "Oslo - Majorstuen",
        "Adresse 45, 4725 Oslo",
        "Mandag - Fredag: 10:00 - 23:00",
        "Lørdag - Søndag: 11:00 - 24:00",
        "+47 404040",
        "kontakt@gylnepizza.majorstuen.no",
        "majorstuen.png"
    ),
    new Department(
        1,
        "Oslo - Storo",
        "Adresse 45, 4725 Oslo",
        "Mandag - Fredag: 10:00 - 23:00",
        "Lørdag - Søndag: 11:00 - 24:00",
        "+47 404040",
        "kontakt@gylnepizza.storo.no",
        "storo.png"
    ),
    new Department(
        1,
        "Oslo - Ensjø",
        "Adresse 45, 4725 Oslo",
        "Mandag - Fredag: 10:00 - 23:00",
        "Lørdag - Søndag: 11:00 - 24:00",
        "+47 404040",
        "kontakt@gylnepizza.ensjo.no",
        "ensjo.png"
    ),
    new Department(
        1,
        "Oslo - Skippergata",
        "Adresse 45, 4725 Oslo",
        "Mandag - Fredag: 10:00 - 23:00",
        "Lørdag - Søndag: 11:00 - 24:00",
        "+47 404040",
        "kontakt@gylnepizza.skippergata.no",
        "skippergata.png"
    ),
];
>>>>>>> Stashed changes

export function saveEmployees() {
    if (localStorage.getItem("employees")) return;
    localStorage.setItem("employees", JSON.stringify(employees));
}

export function saveDepartments() {
    localStorage.setItem("departments", JSON.stringify(departments));
<<<<<<< Updated upstream
}

export function saveShifts() {
    if (localStorage.getItem("shifts")) return;
    localStorage.setItem("shifts", JSON.stringify(shifts));
=======
>>>>>>> Stashed changes
}
