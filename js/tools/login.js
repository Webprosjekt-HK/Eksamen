import EmployeeCollection from '/js/classes/EmployeeCollection.js';
let tempSet = new Set();

const checkCredentials = (userName,password) => {
    const employees = new EmployeeCollection();
    employees.fetchEmployees().forEach((e) => {
        if (e.username === userName && e.password === password) {
            console.info("found match, logging in...");
            console.log(e);
            return e;
        }
    });
    return null;
}
export default checkCredentials;