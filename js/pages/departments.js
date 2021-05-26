import MakeProfileBanner from "/js/modules/MakeProfileBanner.js";
import * as setup from "/js/tools/setup.js";
import EmployeeCollection from "/js/classes/EmployeeCollection.js";
import Department from "/js/classes/Department.js";
import DepartmentCollection from "/js/classes/DepartmentCollection.js";
import makeInfoPage from "/js/modules/makeInfoPage.js";

const departments = (() => {
    const init = () => {
        const mainElement = document.getElementById("main");
        mainElement.innerHTML = ``;
        let employeeList = new EmployeeCollection().fetchEmployees();
        let makeProfileBanner = new MakeProfileBanner("main-body");
        let departmentList = new DepartmentCollection().fetchDepartments();
        let profileInfo = new makeInfoPage("info-page");

        console.log(departmentList);

        profileInfo.deploy(
            `${departmentList[0].name}`,
            `${departmentList[0].address}`,
            `${departmentList[0].weekHours}`,
            `${departmentList[0].weekendHours}`,
            `${departmentList[0].phoneNumber}`,
            `${departmentList[0].emailAddress}`,
            `${departmentList[0].mapLocation}`
        );

        for (let i = 1; i < 4; i++) {
            for (let j = 0; i < 4; j++) {
                makeProfileBanner.apply(
                    `${j + 1}`,
                    `${employeeList[j].firstName} ${employeeList[j].lastName}`,
                    `${employeeList[j].role}`,
                    `${employeeList[j].phoneNumber}`,
                    `${employeeList[j].username}`
                );
            }
        }
    };
    return { init };
})();

export default departments;
