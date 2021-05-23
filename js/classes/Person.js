export default class Person {
    id;
    firstName;
    lastName;
    username;
    password;
    address;
    constructor(id, firstName, lastName, username, password, address) {
        this.id = id;
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
    pictureUrl;
    constructor(
        id,
        firstName,
        lastName,
        username,
        password,
        address,
        salary,
        pictureUrl,
        departmentID,
        adminPrivileges
    ) {
        super(id, firstName, lastName, username, password, address);
        this.departmentID = departmentID;
        this.adminPrivileges = adminPrivileges;
        this.salary = salary;
        this.adminPrivileges;
        this.pictureUrl = pictureUrl;
    }
    setSalary = (amount) => (this.salary = amount);
    setAdmin = (departmentID) => this.adminPrivileges.push(departmentID);
    setDepartment = (departmentID) => this.departmentID.push(departmentID);
    removeAdmin = (departmentID) => {
        const departmentIndex = this.adminPrivileges.indexOf(departmentID);
        this.departmentID.splice(departmentIndex, 1);
    };
}
