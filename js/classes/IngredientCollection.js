export default class IngredientCollection {
    fetchIngredient = () => {
        return JSON.parse(localStorage.getItem("ingredients"));
    }
}