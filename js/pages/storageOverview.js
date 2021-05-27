import MakeStorageTable from "/js/modules/MakeStorageTable.js";
import * as setup from "/js/tools/setup.js";
import IngredientCollection from "/js/classes/IngredientCollection.js";
import StorageItems from "/js/modules/StorageItems.js";

const storage = (() => {
    const init = () => {

        const mainElement = document.getElementById("main");
        mainElement.innerHTML = ``;
        if(!localStorage.getItem("ingredients")) setup.saveIngredients();
        let ingredientList = new IngredientCollection().fetchIngredient();
        console.log(ingredientList);
        const makeStorageTable = new MakeStorageTable();
        const storageItems = new StorageItems();
        makeStorageTable.apply();
    };
    return { init };
})();

export default storage;