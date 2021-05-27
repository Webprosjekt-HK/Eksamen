import { Employee } from "/js/classes/Person.js";
import Shift from "/js/classes/Shift.js";
import Department from "/js/classes/Department.js";
import Pizza from "/js/classes/Pizza.js";

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
        [2, 3],
        []
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
        [1, 2, 4],
        []
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

const menuItems = [
    new Pizza("Margarita", "Mozarella og tomatsaus", 30, 94, 64),
    new Pizza("Hawaii", "Mozarella, tomatsaus, ananas og skinke", 40, 104, 64),
    new Pizza("Pepperoni", "Mozarella, tomatsaus og pepperoni", 35, 114, 79),
    new Pizza("Ham", "Mozarella, tomatsaus og skinke", 40, 94, 54),
    new Pizza(
        "The Tropical",
        "Mozarella, tomatsaus, osteblanding, ananas og oregano",
        45,
        128,
        83
    ),
    new Pizza(
        "Californian Dream",
        "Rømmedressing, tomatsaus, osteblanding, skinke og ruccola",
        60,
        138,
        78
    ),
    new Pizza(
        "Thai Chicken",
        "Sataysaus, paprika, rødløk, sataykylling, ananas, peanøtter og koriander",
        60,
        158,
        98
    ),
    new Pizza(
        "Green Garden",
        "Avokado, rødløk, osteblanding, cherrytomater og limezest",
        56,
        168,
        112
    ),
    new Pizza(
        "Big Shot",
        "BBQ-kylling, bacon, pepperoni, cherrytomater og oregano",
        60,
        168,
        108
    ),
    new Pizza(
        "Rio Grande",
        "Spicy tacokrydret kjøttdeig, spicy salsa, fersk paprika, lime, jalapeno og tortilla chips",
        63,
        168,
        105
    ),
    new Pizza(
        "Spicy Chicken",
        "Spicy marinert kylling, rødløk, osteblanding, jalapeno og limezest",
        50,
        168,
        118
    ),
    new Pizza(
        "Pepper Steak",
        "Marinert biffkjøtt, rødløk, paprika og oregano",
        45,
        158,
        113
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

export function savePizzas() {
    localStorage.setItem("pizzas", JSON.stringify(menuItems));
}

export function saveShifts() {
    if (localStorage.getItem("shifts")) return;
    localStorage.setItem("shifts", JSON.stringify(shifts));
    window.location.reload();
}

export function addEventListeners() {
    // Event handler for links
    document.getElementById("log-out").onclick = () => {
        localStorage.removeItem("user");
        window.location.href = "/landingpage.html";
    };
    const pageTitleElement = document.getElementById("page-title");
    document.getElementById("profile-link").onclick = () => {
        pageTitleElement.innerHTML = "Min Side";
        profile.init(state);
    };
    document.getElementById("shift-link").onclick = () => {
        shiftOverview.init(state);
        pageTitleElement.innerHTML = "Skift";
    };
    document.getElementById("department-link").onclick = () => {
        pageTitleElement.innerHTML = "Avdelinger";
        departments.init();
    };
    document.getElementById("sales-link").onclick = () => {
        salesInfo.init();
        pageTitleElement.innerHTML = "Omsetning";
    };
    document.getElementById("menu-link").onclick = () => {
        menu.init();
        pageTitleElement.innerHTML = "Meny";
    };
}
