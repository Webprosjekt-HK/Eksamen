import profile from "/js/modules/profile.js";
import * as setup from "/js/tools/setup.js";
import checkCredentials from "/js/tools/login.js";
const state = {
    loggedInUser: {}
}
// profilknapp onclick - kjør denne.. osv
profile.init();

// Denne importerer brukerene våre ved første kjøring
// TODO: Lage tilsvarende funksjonalitet for pizza-avdelinger og salg

if (!localStorage.getItem("employees")) setup.saveEmployees();
// TODO: legge til en initiator for alle sider, koble de opp mot onclick på lenkene. Koble opp login
// mot en state, og et form;
const user = checkCredentials("ola@gylnepizza.no", "1234");
console.log(user);
if (user !== null) state.loggedInUser = user;
console.log(state);