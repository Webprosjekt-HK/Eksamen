import MakeAdminPanels from "/js/modules/MakeAdminPanels.js";

const admin = (() => {
    const init = (state) => {
        const departmentsWithAdmin = state.loggedInUser.adminPrivileges;
        const adminPanel = new MakeAdminPanels(departmentsWithAdmin).getPanel();
        const mainContainer = document.getElementById("main");
        mainContainer.innerHTML = "";
        mainContainer.append(adminPanel);
    };
    return { init };
})();

export default admin;
