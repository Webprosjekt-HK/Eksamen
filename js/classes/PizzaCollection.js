export default class PizzaCollection {
    fetchPizza = () => {
        return JSON.parse(localStorage.getItem("pizzas"));
    }
}