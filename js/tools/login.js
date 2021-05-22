import EmployeeCollection from '/js/classes/EmployeeCollection.js';
let tempSet = new Set();

const checkCredentials = (userName,password) => {
    const employees = new EmployeeCollection();
    let loggedInUser = null;
    employees.fetchEmployees().forEach((e) => {
        if (e.username === userName && e.password === password) {
            console.info("found match, logging in...");
            loggedInUser = e;
        }
    });
    return loggedInUser;
}
export default checkCredentials;