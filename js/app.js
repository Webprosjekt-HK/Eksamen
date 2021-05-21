import MakeTile from "/js/modules/MakeTile.js";

const makeTile = new MakeTile("main");

for (let i = 0; i < 20; i++) {
    makeTile.apply("ikon", `headertest ${i + 1}`, `bodytest ${i + 1}`, "is-3");
}
