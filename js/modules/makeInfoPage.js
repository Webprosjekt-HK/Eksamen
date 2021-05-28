export default class makeInfoPage {
    deploy = (name, address, weekHours, weekendHours, phoneNumber, email, mapImage) => {
        //HTML-content to send to info section (parameters are contents deployed)
        let info = `
        <p class="title">${name}</p>
        <p>${weekHours}</p>
        <p>${weekendHours}</p>
        <p>Telefon: ${phoneNumber}</p>
        <p>Adresse: ${address}</p>
        <a href="mailto:${email}">${email}</a>
        `;

        //image of map for the relevant resturant
        let map = `
        <img src="/images/locations/${mapImage}">
        `;

        //HTML section that info and map is deployed to
        let infoSection = `
        <div class="tile is-4 is-vertical is-parent">
                              <div class="tile is-child box">
                                <div id="resturant-info"></div>
                              </div>
                              <div class="tile is-child box">
                                <div id="map-image"></div>
                              </div>
                            </div>
                            <div class="tile is-parent">
                              <div class="is-child box">
                                <p class="title">Ansatte</p>
                                <div id="employees" class="columns is-multiline is-gapless"></div>
                              </div>
                            </div>
        `;

        //Sending all the HTML to the correct sections of document
        document.getElementById("main").innerHTML += infoSection;
        document.getElementById("resturant-info").innerHTML += info;
        document.getElementById("map-image").innerHTML += map;
    };
}