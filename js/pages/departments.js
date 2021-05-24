import MakeProfileBanner from "/js/modules/MakeProfileBanner.js";
import * as setup from "/js/tools/setup.js";
import EmployeeCollection from "/js/classes/EmployeeCollection.js";
import * as DepartmentInfo from "/js/modules/DepartmentInfo.js";
import DepartmentCollection from "../classes/DepartmentCollection.js";
import { saveDepartments } from "../tools/setup.js";


const departments = (() => {


    const init = () => {
        if(!localStorage.getItem("employees")) setup.saveEmployees();
        let employeeList = new EmployeeCollection().fetchEmployees();
        let departmentList = JSON.parse(localStorage.getItem("departments"));
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

        departmentInfo.deploy(`${departmentList[0].locationName}`,
        `${departmentList[0].address}`,
        `${departmentList[0].weekHours}`,
        `${departmentList[0].weekendHours}`,
        `${departmentList[0].phoneNumber}`,
        `${departmentList[0].emailAddress}`,
        `${departmentList[0].mapLocation}`
        )

    };
    return { init };
})();

export default departments;