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
                    <span class="card-header-icon">${icon}</span>
                    <p class="card-header-title has-text-right">${header}</p>
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