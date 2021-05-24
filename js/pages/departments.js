import MakeProfileBanner from "/js/modules/MakeProfileBanner.js";
import * as setup from "/js/tools/setup.js";
import EmployeeCollection from "/js/classes/EmployeeCollection.js";


const departments = (() => {


    const init = () => {
        if(!localStorage.getItem("employees")) setup.saveEmployees();
        let employeeList = new EmployeeCollection().fetchEmployees();
        let makeProfileBanner = new MakeProfileBanner("main-body");
        
        for(let i = 1; i < 5; i++){
            for(let j = 0; i < 5; j++){
                makeProfileBanner.apply(`${j + 1}`,
                 `${employeeList[j].firstName} ${employeeList[j].lastName}`, 
                 `${employeeList[j].role}`, 
                 `${employeeList[j].phoneNumber}`, 
                 `${employeeList[j].username}`);
            }
        }
    };
    return { init };
})();

export default departments;