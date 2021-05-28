import MakeStorageTable from "/js/modules/MakeStorageTable.js";
import * as setup from "/js/tools/setup.js";
import IngredientCollection from "/js/classes/IngredientCollection.js";
import StorageItems from "/js/modules/StorageItems.js";
import OrderItems from "/js/modules/OrderItems.js";

const storage = (() => {
    const init = () => {

        const mainElement = document.getElementById("main");
        mainElement.innerHTML = ``;
        if(!localStorage.getItem("ingredients")) setup.saveIngredients();
        let ingredientList = new IngredientCollection();
        let ingredients = ingredientList.fetchIngredient();
        console.log(ingredients);
        const makeStorageTable = new MakeStorageTable();
        const storageItems = new StorageItems();
        const orderItems = new OrderItems();
        makeStorageTable.apply();
        let stockStatus = "";
        
        for (let i = 0; i < 4; i++){
            if(ingredients[i].status == 1) stockStatus = `<a class="button is-danger is-rounded">Tomt</a>`;
            if(ingredients[i].status == 2) stockStatus = `<a class="button is-warning is-rounded">Lav</a>`;
            if(ingredients[i].status == 3) stockStatus = `<a class="button is-primary is-rounded">Normal</a>`;
            storageItems.apply(
                `${ingredients[i].name}`,
                `${ingredients[i].stock}`,
                `3. Mai`,
                `${stockStatus}`
            );
        }

        var index,
            table = document.getElementById("products-left-table");
        console.log(table);
        for (var i = 1; i < table.rows.length; i++) {
            table.rows[i].cells[4].onclick = function () {
                //console.log(this.parentElement.cells[0]);
                let name = this.parentElement.cells[0].innerHTML;
                let currentTr;
                for (let i = 0; i < ingredients.length; i++){
                    if(ingredients[i].name == name) currentTr = ingredients[i];
                }
                console.log(currentTr);
                var c = confirm(
                    "Er du sikker på at du vil Bestille dette produktet?"
                );
                if (c === true) {
                    index = this.parentElement.rowIndex;
                    orderItems.apply(
                        `${currentTr.name}`,
                        `10 stk`,
                        `${currentTr.price / 10}`,
                        `${currentTr.price}`
                    );
                }
            };
        }

    };
    return { init };
})();

export default storage;