import EmployeeCollection from "/js/classes/EmployeeCollection.js";

const signup = (user) => {
    const employeeCollection = new EmployeeCollection();
    //debugger;
    employeeCollection.addEmployee(user);
};
export default signup;
