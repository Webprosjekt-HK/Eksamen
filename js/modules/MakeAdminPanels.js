import DepartmentCollection from "/js/classes/DepartmentCollection.js";

export default class MakeAdminPanels {
    constructor() {}

    getPanel = () => {
        const containerElement = document.createElement("div");
        const departmentCollection = new DepartmentCollection();

        containerElement.innerHTML = html` <div class="columns is-multiline">
            <div class="column">
                <div class="control">
                    <input
                        class="input is-focuesed first-name"
                        type="text"
                        placeholder="Fornavn"
                    />
                </div>
                <div class="control">
                    <input
                        class="input last-name"
                        type="text"
                        placeholder="etternavn"
                    />
                </div>
                <div class="control">
                    <input
                        class="input birth-date"
                        type="date"
                        placeholder="YYYY-MM-DD"
                    />
                </div>
                <div class="control">
                    <textarea
                        class="input address"
                        type="text"
                        rows="5"
                        placeholder="adresse"
                    ></textarea>
                </div>
            </div>
            <div class="column">
                ${departmentCollection
                    .fetchDepartments()
                    .map((e) => {
                        return (
                            '<div class="control"><input type="checkbox" name="' +
                            e.name +
                            '" value="' +
                            e.id +
                            '"><label class="checkbox" for="' +
                            e.name +
                            '">' +
                            e.name +
                            '</label><p>Er leder?</span><br /><input type="radio" value="true" name="' +
                            e.id +
                            '" /><label for="' +
                            e.id +
                            '">Ja</label></div>' +
                            '</label><input type="radio" value="false" name="' +
                            e.id +
                            '"/><label for="' +
                            e.id +
                            '">Nei</label></div>'
                        );
                    })
                    .join(" ")}
            </div>
        </div>`;
        return containerElement;
    };
}
