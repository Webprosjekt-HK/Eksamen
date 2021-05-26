export default class MakeMenu {
    apply = () => {

        let emptyTable = `
            <table id="menu_table" class="table is-striped" width="100%">
                <thead>
                    <tr>
                        <th>Navn</th>
                        <th>Ingredienser</th>
                        <th>Innkjøpspris</th>
                        <th>Utsalgspris</th>
                        <th>Profitt</th>
                        <th>Ta bort</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="menu_body">
                </tbody>
            </table>
        `;
        document.getElementById("main").innerHTML += emptyTable;
    };
}