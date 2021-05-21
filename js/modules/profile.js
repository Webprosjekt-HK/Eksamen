import MakeTile from "/js/modules/MakeTile.js";

const profile = (() => {
    const body = document.createElement("div");
    body.classList.add("container", "columns", "is-multiline");
    body.id = "main-body";

    const init = () => {
        document.getElementById("main").append(body);
        let makeTile = new MakeTile("main-body");
        for (let i = 0; i < 20; i++) {
            makeTile.apply(
                "ikon",
                `headertest ${i + 1}`,
                `bodytest ${i + 1}`,
                "is-3"
            );
        }
    };
    return { init };
})();

export default profile;
