import profile from "/js/pages/profile.js";
import shiftOverview from "/js/pages/shiftOverview.js";
import * as setup from "/js/tools/setup.js";
import checkCredentials from "/js/tools/login.js";
import signup from "/js/tools/signupService.js";
import { Employee } from "/js/classes/Person.js";

const state = {
    loggedInUser: {},
};
// profilknapp onclick - kjør denne.. osv

// Denne importerer brukerene våre ved første kjøring
setup.saveShifts();
setup.saveEmployees();

const user = checkCredentials("gjerdmunn@gylnepizza.no", "1234");
if (user !== null) state.loggedInUser = user;

// Midlertidig fiks på ødelagt localStorage-objekter
try {
    profile.init(state);
} catch (error) {
    // localStorage.removeItem("employees");
    // window.location.reload();
    console.error(error);
    console.error("Attempting to reinstall data");
}
// Legger inn info i sidemenyen.. flytte et annet sted etterhvert
document.querySelector(".logout .name").innerHTML =
    state.loggedInUser.firstName + " " + state.loggedInUser.lastName;
document.querySelector(".logout .job").innerHTML = state.loggedInUser.role;

// Event handler for links
document.getElementById("profile-link").onclick = () => profile.init(state);
document.getElementById("shift-link").onclick = () => shiftOverview.init(state);
