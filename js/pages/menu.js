import MakeMenu from "/js/modules/MakeMenu.js";
import * as setup from "/js/tools/setup.js";
import PizzaCollection from "/js/classes/PizzaCollection.js";
import MenuItems from "/js/modules/MenuItems.js";

const menu = (() => {
    const init = () => {
        //Creating necessary objects to manipulate and deploy to DOM.
        //Clears main-section of document to make room for new page.
        const mainElement = document.getElementById("main");
        mainElement.innerHTML = ``;
        //Checks if list of menu items are present in localStorage. Adds them if they are not
        if (!localStorage.getItem("pizzas")) setup.savePizzas();
        let pizzaList = new PizzaCollection().fetchPizza();
        const makeMenu = new MakeMenu();
        const menuItems = new MenuItems();

        //Creates empty menu table
        makeMenu.apply();

        //Deploys all menu items to empty menu
        for (let i = 0; i < pizzaList.length; i++) {
            menuItems.apply(
                `${pizzaList[i].name}`,
                `${pizzaList[i].ingredients}`,
                `${pizzaList[i].inPrice}`,
                `${pizzaList[i].outPrice}`,
                `${pizzaList[i].profit}`
            );
        }

        //Functionality to remove menu items from menu
        var index,
            table = document.getElementById("menu-table");
        for (var i = 1; i < table.rows.length; i++) {
            table.rows[i].cells[5].onclick = function () {
                //Confirms if you want to remove menu item
                var c = confirm(
                    "Er du sikker på at du vil slette denne raden?"
                );
                if (c === true) {
                    //Removes item from menu
                    index = this.parentElement.rowIndex;
                    table.deleteRow(index);
                }
            };
        }
    };
    return { init };
})();

export default menu;
