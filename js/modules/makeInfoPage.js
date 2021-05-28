export default class makeInfoPage {
    deploy = (name, address, weekHours, weekendHours, phoneNumber, email, mapImage) => {
        let info = `
        <p class="title">${name}</p>
        <p>${weekHours}</p>
        <p>${weekendHours}</p>
        <p>Telefon: ${phoneNumber}</p>
        <p>Adresse: ${address}</p>
        <a href="mailto:${email}">${email}</a>
        `;

        let map = `
        <img src="/images/locations/${mapImage}">
        `;

        let infoSection = `
        <div class="tile is-4 is-vertical is-parent">
                              <div class="tile is-child box card">
                                <div id="resturant-info"></div>
                              </div>
                              <div class="tile is-child box card">
                                <div id="map-image"></div>
                              </div>
                            </div>
                            <div class="tile is-parent">
                              <div class="is-child box card">
                                <p class="title">Ansatte</p>
                                <div id="employees" class="columns is-multiline is-gapless employees-box"></div>
                              </div>
                            </div>
        `;
        document.getElementById("main").innerHTML += infoSection;
        document.getElementById("resturant-info").innerHTML += info;
        document.getElementById("map-image").innerHTML += map;
    };
}