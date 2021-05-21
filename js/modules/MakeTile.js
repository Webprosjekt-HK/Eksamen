export default class MakeTile {
    elementID;
    constructor(elementID) {
        this.elementID = elementID;
    }

    apply = (icon, header, text, size) => {
        console.log("ping");
        let html = ` <div class="card column">
            <header class="card-header">
                <p class="card-header-title">${header}</p>
                <span class="icon">${icon}</span>
            </header>
            <div class="card-content ${size}">
                <p>${text}</p>
            </div>
        </div>`;
        document.getElementById(this.elementID).innerHTML = html;
    };
}
