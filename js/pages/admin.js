import MakeAdminPanels from "/js/modules/MakeAdminPanels.js";

const admin = (() => {
    const init = (state) => {
        const adminPanel = new MakeAdminPanels().getPanel();
        const mainContainer = document.getElementById("main");
        mainContainer.innerHTML = "";
        mainContainer.append(adminPanel);
    };
    return { init };
})();

export default admin;
