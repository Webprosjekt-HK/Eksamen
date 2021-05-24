import { Employee } from "/js/classes/Person.js";
import EmployeeCollection from "/js/classes/EmployeeCollection.js";

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
        "images/picture.jpg",
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

const departments = [{}];

export function saveEmployees() {
    localStorage.setItem("employees", JSON.stringify(employees));
}

export function saveDepartments() {
    localStorage.setItem("departments", departments);
}
