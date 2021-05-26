import checkCredentials from "/js/tools/loginService.js";

function login(username, pasword) {
    const user = checkCredentials(username, password);

    if (user !== null) {
        localStorage.setItem("user", user);
    }

    window.location = window.location.host() + "/index-christian.html";
}
