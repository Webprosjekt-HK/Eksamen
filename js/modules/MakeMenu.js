export default class MakeMenu {
    apply = () => {

        let emptyTable = `
            <table id="menu-table" class="table is-striped" width="90%">
                <thead>
                    <tr>
                        <th>Navn</th>
                        <th>Ingredienser</th>
                        <th>Innkjøpspris</th>
                        <th>Utsalgspris</th>
                        <th>Profitt</th>
                        <th>Ta bort</th>
                    </tr>
                </thead>
                <tbody id="menu-body">
                </tbody>
            </table>
        `;
        document.getElementById("main").innerHTML += emptyTable;
    };
}