import checkCredentials from "/js/tools/loginService.js";

function login(username, password) {
    const user = checkCredentials(username, password);
    console.log("click");
    if (user !== null) {
        localStorage.setItem("user", JSON.stringify(user));
        window.location.replace("/index-christian.html");
        console.log("Logging in");
    } else {
        // some message
        console.error("wrong username or password");
    }
}

document.querySelector("#login-btn").onclick = (e) => {
    e.preventDefault();
    const username = document.getElementById("loginUser").value;
    const password = document.getElementById("loginPassword").value;

    login(username, password);
};
