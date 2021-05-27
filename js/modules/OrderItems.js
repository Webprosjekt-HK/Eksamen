export default class OrderItems {
    apply = (name, amount, price, totalPrice) => {
        let addItem = `
            <tr>
                <td>${ name }</td>
                <td>${ amount } stk</td>
                <td>Tirsdag neste uke</td>
                <td>${ price }</td>
                <td>${ totalPrice }</td>
                <td></td>
            </tr>
        `;

        document.getElementById("order-body").innerHTML += addItem;
    };
}