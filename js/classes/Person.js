export default class Person {
    firstName;
    lastName;
    username;
    password;
    address;
    constructor(firstName, lastName, username, password, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.address = address;
    }
}

export class Employee extends Person {
    departmentID;
    adminPrivileges;
    salary;
    constructor(firstName, lastName, username, password, address, salary) {
        super(firstName, lastName, username, password, address);
        this.departmentID = [];
        this.adminPrivileges = [];
        this.salary = salary;
        this.adminPrivileges;
    }
    setSalary = (amount) => (this.salary = amount);
    setAdmin = (departmentID) => this.adminPrivileges.push(departmentID);
    removeAdmin = (departmentID) => {
        const departmentIndex = this.adminPrivileges.indexOf(departmentID);
        this.departmentID.splice(departmentIndex, 1);
    };
}
