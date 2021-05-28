export default class IngredientCollection {
    fetchIngredient = () => {
        return JSON.parse(localStorage.getItem("ingredients"));
    }

    filterByName = (depName) => {
        return this.fetchIngredient().find((e) => e.name == depName);
    };
}