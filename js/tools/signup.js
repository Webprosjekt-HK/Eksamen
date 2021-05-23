import EmployeeCollection from "/js/classes/EmployeeCollection.js";
import Employee from "/js/classes/Person.js";


const signup = (user) => { 
    const employeeCollection = new EmployeeCollection();
    employeeCollection.addEmployee(user);
}
export default signup;