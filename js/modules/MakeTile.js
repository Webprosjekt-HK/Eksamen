export default class MakeTile {
    elementID;
    constructor(elementID) {
        this.elementID = elementID;
    }

    apply = (icon, header, text, size) => {
        let html = `
        <div class="column ${size}">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">${header}</p>
                    <span class="card-header-icon">${icon}</span>
                </header>
                <div class="card-content">
                    <div class="content">
                        <p>${text}</p>    
                    </div>
                </div>
            </div>
        </div>`;
        document.getElementById(this.elementID).innerHTML += html;
    };
}
