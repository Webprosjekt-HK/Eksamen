import { Employee } from '/js/classes/Person.js';

export default class EmployeeCollection {
    // Helper method. Burde  vært privat
    castToEmployee = (userObject) => 
        new Employee(userObject.firstName,userObject,this.lastName,userObject.username,
                userObject.password,userObject.address,userObject.salary,
                userObject.pictureUrl,userObject.departmentID,userObject.adminPrivileges);
    fetchEmployees = () => {
        return JSON.parse(localStorage.getItem("employees"));
    };
    findEmployee = (username) => {
        let user = null;
        this.fetchEmployees().forEach((e) => {
            if (username === e.username) user = e;
        });
        return user;
    }
    addEmployee = (userObject) => {
        const employees = this.fetchEmployees();
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].username === userObject.username) return { status: "User already exists", code: 400 };
        }
        employees.push(userObject);
        localStorage.setItem("employees",JSON.stringify(employees));
        return { status: "User added ", code: 200 }
    }
    removeEmployee = (username) => {
        const employees = this.fetchEmployees();
        const indexOfEmployee = employees.indexOf(username);
        if (indexOfEmployee !== -1) {
            localStorage.setItem(JSON.parse(employees.splice(indexOfEmployee,1)));
            return { status: "User removed ", code: 200 }
        }
        return { status: "User not found", code: 400 }
    }
}