export default class PizzaCollection {
    //Function to retrieve all locally stored Pizza objects
    fetchPizza = () => {
        return JSON.parse(localStorage.getItem("pizzas"));
    }
}