import { Employee } from "/js/classes/Person.js";

export default class EmployeeCollection {
    // Helper method to cast an object literal to an Employee object.
    castToEmployee = (userObject) =>
        new Employee(
            userObject.id,
            userObject.role,
            userObject.phoneNumber,
            userObject.firstName,
            userObject.lastName,
            userObject.username,
            userObject.password,
            userObject.address,
            userObject.salary,
            userObject.pictureUrl,
            userObject.departmentID,
            userObject.adminPrivileges
        );
    fetchEmployees = () => {
        // The map method returns a new array with the result of the action done to the elements.
        // Here I want to keep everything as Employee-objects, not object literals which seems
        // To happen when storing stuff to localStorage, and it strips away the methods within the objects.
        return JSON.parse(localStorage.getItem("employees")).map((e) =>
            this.castToEmployee(e)
        );
    };
    findEmployee = (username) => {
        return this.fetchEmployees().filter((e) => username === e.username);
    };
    addEmployee = (userObject) => {
        const employees = this.fetchEmployees();
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].username === userObject.username) {
                console.error("User already exists!");
                return { status: "User already exists", code: 400 };
            }
        }
        employees.push(userObject);
        localStorage.setItem("employees", JSON.stringify(employees));
        return { status: "User added ", code: 200 };
    };
    removeEmployee = (username) => {
        const employees = this.fetchEmployees();
        const indexOfEmployee = employees.indexOf(username);
        if (indexOfEmployee !== -1) {
            localStorage.setItem(
                JSON.parse(employees.splice(indexOfEmployee, 1))
            );
            return { status: "User removed ", code: 200 };
        }
        return { status: "User not found", code: 400 };
    };
}
