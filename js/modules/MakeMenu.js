export default class MakeMenu {
    apply = () => {
        //Empty menu table deployed to main-section of HTML document
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

        //Sending emptyTable (Empty menu) to main-section
        document.getElementById("main").innerHTML += emptyTable;
    };
}