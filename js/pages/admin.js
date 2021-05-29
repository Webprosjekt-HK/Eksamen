import MakeAdminPanels from "/js/modules/MakeAdminPanels.js";

const admin = (() => {
    const init = (state) => {
        const departmentsWithAdmin = state.loggedInUser.adminPrivileges;
        const adminPanel = new MakeAdminPanels(departmentsWithAdmin).getPanel();
        const mainContainer = document.getElementById("main");
        mainContainer.innerHTML = "";
        mainContainer.append(adminPanel);
        adminPanel.querySelector('#admin-save-btn').onclick = () => {
            const departmentsInfo = adminPanel.querySelectorAll('.department-registration');
            const firstName = adminPanel.querySelector('#add-first-name').value;
            const lastName = adminPanel.querySelector('#add-last-name').value;
            const address = adminPanel.querySelector('#add-address').value;
            const birthDate = adminPanel.querySelector('#add-birth-date').value;

            console.log(departmentsInfo,firstName,lastName,address,birthDate);
            Array.from(departmentsInfo).forEach(e => {
                console.log(e);
            })
        }
    };
    return { init };
})();

export default admin;
