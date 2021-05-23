
import { Employee } from "/js/classes/Person.js";

const employees = [new Employee(
    "Ola","Nordmann","ola@gylnepizza.no","1234",
    "pizzaveien 1",420000,"images/picture.jpg",[1,2,3,4],[1,2,3,4])
];
const departments = [{}];

export function saveEmployees() {
    localStorage.setItem("employees", JSON.stringify(employees));
}

export function saveDepartments() {
    localStorage.setItem("departments", departments);
}