export default class StorageItems {
    apply = (name, amount, date, status) => {
        let addItem =  `
            <tr>
                <td>${ name }</td>
                <td>${ amount }</td>
                <td>${ date }</td>
                <td><img src="${ status }"></td>
                <td><img src=""></td>
                <td></td>
            </tr>
        `;

        document.getElementById("storage-body").innerHTML += addItem;
    };
}