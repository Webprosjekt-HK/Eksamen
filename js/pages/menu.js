import MakeMenu from "/js/modules/MakeMenu.js";
import * as setup from "/js/tools/setup.js";
import PizzaCollection from "/js/classes/PizzaCollection.js";
import MenuItems from "/js/modules/MenuItems.js";

const menu = (() => {
    const init = () => {
        const mainElement = document.getElementById("main");
        mainElement.innerHTML = ``;
        if (!localStorage.getItem("pizzas")) setup.savePizzas();
        let pizzaList = new PizzaCollection().fetchPizza();
        console.log(pizzaList);
        const makeMenu = new MakeMenu();
        const menuItems = new MenuItems();

        makeMenu.apply();

        for (let i = 0; i < pizzaList.length; i++) {
            menuItems.apply(
                `${pizzaList[i].name}`,
                `${pizzaList[i].ingredients}`,
                `${pizzaList[i].inPrice}`,
                `${pizzaList[i].outPrice}`,
                `${pizzaList[i].profit}`
            );
        }
        var index,
            table = document.getElementById("menu-table");
        console.log(table);
        for (var i = 1; i < table.rows.length; i++) {
            table.rows[i].cells[5].onclick = function () {
                var c = confirm(
                    "Er du sikker på at du vil slette denne raden?"
                );
                if (c === true) {
                    index = this.parentElement.rowIndex;
                    table.deleteRow(index);
                }
            };
        }
    };
    return { init };
})();

export default menu;
