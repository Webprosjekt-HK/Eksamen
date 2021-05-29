import DepartmentCollection from "/js/classes/DepartmentCollection.js";

export default class MakeAdminPanels {
    constructor(departmentsWithAdmin) {
        this.departmentsWithAdmin = departmentsWithAdmin;
    }

    getPanel = () => {
        const containerElement = document.createElement("div");
        const departmentCollection = new DepartmentCollection();
        const checkBoxes = departmentCollection
            .fetchDepartments()
            .map((e) => {
                return (
                    '<div class="panel-block"><div class="control"><p class="subtitle is-5">Ansatt ved: </p><input type="checkbox" name="' +
                    e.name +
                    '" value="' +
                    e.id +
                    '"><label class="checkbox" for="' +
                    e.name +
                    '">' +
                    e.name +
                    '</label></div><div class="control"><p>Er leder?</span><br /><input type="radio" value="true" name="' +
                    e.id +
                    '" ><label for="' +
                    e.id +
                    '">Ja</label>' +
                    '</label><input type="radio" value="false" name="' +
                    e.id +
                    '"><label for="' +
                    e.id +
                    '">Nei</label></div></div>'
                );
            }).join(" ");
            console.log(checkBoxes);
        containerElement.innerHTML = ` 
        <div class="panel">
            <p class="panel-heading">
                Legg til ansatt
            </p>
            <div class="panel-block">
                <div class="control">
                    <input
                        class="input is-focuesed first-name"
                        type="text"
                        placeholder="Fornavn"
                    >
                </div>
            </div>
            <div class="panel-block">
                <div class="control">
                    <input
                        class="input last-name"
                        type="text"
                        placeholder="etternavn"
                    >
                </div>
            </div>
            <div class="panel-block">
                <div class="control">
                    <input
                        class="input birth-date"
                        type="date"
                        placeholder="YYYY-MM-DD"
                    />
                </div>
            </div>
            <div class="panel-block">
                <div class="control">
                    <textarea
                        class="input address"
                        type="text"
                        rows="5"
                        placeholder="adresse"
                    ></textarea>
                </div>
            </div>
            ${checkBoxes}
            <div class="panel-block"><button class="button">Lagre</button> </div>
        </div>`;
        return containerElement;
    };
}
