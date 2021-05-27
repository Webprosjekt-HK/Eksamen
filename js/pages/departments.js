import MakeProfileBanner from "/js/modules/MakeProfileBanner.js";
import * as setup from "/js/tools/setup.js";
import EmployeeCollection from "/js/classes/EmployeeCollection.js";
import Department from "/js/classes/Department.js";
import DepartmentCollection from "/js/classes/DepartmentCollection.js";
import makeInfoPage from "/js/modules/makeInfoPage.js";


const departments = (() => {
    /**
     * TODO:
     * - Automatisk oppdatere info om avdeling når man endrer i dropdown.
     * - Endre så det faktisk er forskjellig gruppe ansatte når man velger forskjellige
     * avdelinger. 
     * - Mer hypping kommentering av kode. Tydelig forklar hva hver del gjør.
     * **/
    const init = (department) => {
        const mainElement = document.getElementById("main");
        mainElement.innerHTML = ``;
        let employeeList = new EmployeeCollection().fetchEmployees();
        let makeProfileBanner = new MakeProfileBanner("main-body");
        let departmentList = new DepartmentCollection().fetchDepartments();
        let selectedDepartment = document.getElementById('avdelinger').value;
        let currentDepartment = new DepartmentCollection().filterDepartmentsById(selectedDepartment);
        let profileInfo = new makeInfoPage("info-page");


        console.log(departmentList);

        profileInfo.deploy(
            `${currentDepartment.name}`,
            `${currentDepartment.address}`,
            `${currentDepartment.weekHours}`,
            `${currentDepartment.weekendHours}`,
            `${currentDepartment.phoneNumber}`,
            `${currentDepartment.emailAddress}`,
            `${currentDepartment.mapLocation}`
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
