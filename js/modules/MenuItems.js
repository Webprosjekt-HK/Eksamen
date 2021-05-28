export default class MenuItems {
    apply = (name, ingredients, inPrice, outPrice, profit) => {
        /**
         * Adding a new table row to the empty menu section. 
         * Parameters defines value of each cell (Object values) 
         * **/
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

        //Applying table row to menu table
        document.getElementById("menu-body").innerHTML += addPizza;
    };
}