export default class MakeStorageTable {
    apply = () => {
        let productsLeft = `
            <table id="products-left-table" class="table is-striped" width="90%">
                <thead>
                    <tr>
                        <th>Varenavn</th>
                        <th>Antall på lager</th>
                        <th>Dato</th>
                        <th>Lagerstatus</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="storage-body">
                </tbody>
            </table>
        `;

        let orderTable = `
            <table id="order-list-table" class="table is-striped" width="90%">
                <thead>
                    <tr>
                        <th>Varenavn</th>
                        <th>Antall</th>
                        <th>Neste levering</th>
                        <th>Pris pr enhet</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="order-body">
                </tbody>
            </table>
        `;

        document.getElementById("main").innerHTML += productsLeft;
        document.getElementById("main").innerHTML += orderTable;
    };
}