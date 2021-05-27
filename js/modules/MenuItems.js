export default class MenuItems {
    apply = (name, ingredients, inPrice, outPrice, profit) => {

        let addPizza = `
            <tr>
                <td>${ name }</td>
                <td>${ ingredients }</td>
                <td>${ inPrice }</td>
                <td>${ outPrice }</td>
                <td>${ profit }</td>
                <td><img src="./images/stop-sign.png" width="24px" height="24px"></td>
                <td><img src="./images/triple_dots.png" width="24px" height="24px"></td>
            </tr>
        `;

        document.getElementById("menu-body").innerHTML += addPizza;
    };
}