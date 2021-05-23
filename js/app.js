import profile from "/js/pages/profile.js";
import * as setup from "/js/tools/setup.js";
import checkCredentials from "/js/tools/login.js";
import signup from "/js/tools/signup.js";
import { Employee } from "/js/classes/Person.js";

const state = {
    loggedInUser: {},
};
// profilknapp onclick - kjør denne.. osv

// Denne importerer brukerene våre ved første kjøring
// TODO: Lage tilsvarende funksjonalitet for pizza-avdelinger og salg
if (!localStorage.getItem("employees")) setup.saveEmployees();
// TODO: legge til en initiator for alle sider, koble de opp mot onclick på lenkene. Koble opp login
// mot en state, og et form;

const user = checkCredentials("ola@gylnepizza.no", "1234");
console.log(user);
if (user !== null) state.loggedInUser = user;
profile.init(user);
const newUser = new Employee(
    5,
    "Christian",
    "Gregersen",
    "christian@gylnepizza.no",
    "qwerty",
    "",
    50000000,
    "",
    [],
    []
);
signup(newUser);
