export default class StorageItems {
    apply = (name, amount, date, status) => {
        let addItem =  `
            <tr>
                <td>${ name }</td>
                <td>${ amount } stk</td>
                <td>${ date }</td>
                <td>${ status }</td>
                <td><a class="button is-dark is-rounded">Bestill</a></td>
                <td></td>
            </tr>
        `;

        document.getElementById("storage-body").innerHTML += addItem;
    };
}