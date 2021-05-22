import Employee from '/js/classes/Person.js';

export default class EmployeeCollection {
    employees = new Set();
    fetchEmployees = () => {
        JSON.parse(localStorage.getItem("employees")).forEach((employee) => {
            this.employees.add(new Employee(employee.firstName,employee.lastName, employee.userName, employee.password, employee.address,employee.salary,employee.pictureUrl));
        });
        return this.employees;
    }
}