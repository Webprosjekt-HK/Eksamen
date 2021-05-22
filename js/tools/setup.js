
const employees = [
    {firstName: "Ola", lastName: "Nordmann", userName: "ola@gylnepizza.no", password: "1234", salary: 420000, 
    pictureUrl: "", address: "", departmentID: [1,2,3,4], adminPrivileges: [1,2,3,4]}
];

const departments = [{}];

export function saveEmployees() {
    localStorage.setItem("employees", JSON.stringify(employees));
}

export function saveDepartments() {
    localStorage.setItem("departments", departments);
}