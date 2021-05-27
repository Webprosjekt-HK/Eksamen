import profile from "/js/pages/profile.js";
import shiftOverview from "/js/pages/shiftOverview.js";
import * as setup from "/js/tools/setup.js";
import checkCredentials from "/js/tools/loginService.js";
import signup from "/js/tools/signupService.js";
import { Employee } from "/js/classes/Person.js";
import departments from "/js/pages/departments.js";
import DepartmentCollection from "/js/classes/DepartmentCollection.js";

import salesInfo from "/js/pages/sales.js";
import menu from "/js/pages/menu.js";

const state = {
    loggedInUser: {},
};
// profilknapp onclick - kjør denne.. osv

// Denne importerer brukerene våre ved første kjøring
setup.saveShifts();
setup.saveEmployees();
setup.saveDepartments();

// Dev environment
const user = checkCredentials("gjerdmunn@gylnepizza.no", "1234");
if (user !== null) state.loggedInUser = user;

// prod
//state.loggedInUser = JSON.parse(localStorage.getItem("user"));

// kanskje kjøre denne på profiles siden det er den første som kjører..
const depColl = new DepartmentCollection();
document.getElementById("avdelinger").innerHTML +=
    state.loggedInUser.departmentID.map((e) => {
        const dep = depColl.filterDepartmentsById(e);
        return `<option value="${dep.id}">${dep.name}</option>`;
    });
// sette profilbilde i thumbnail
document.getElementById("employee-thumbnail").src =
    state.loggedInUser.pictureUrl;
// Midlertidig fiks på ødelagt localStorage-objekter
try {
    profile.init(state);
} catch (error) {
    localStorage.removeItem("employees");
    //window.location.reload();
    console.error(error);
    console.error("Attempting to reinstall data");
}
// Legger inn info i sidemenyen.. flytte et annet sted etterhvert
document.querySelector(".profile-name").innerHTML =
    state.loggedInUser.firstName + " " + state.loggedInUser.lastName;

setup.addEventListeners();
