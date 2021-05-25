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

        document.getElementById("resturant-info").innerHTML += info;
        document.getElementById("map-image").innerHTML += map;
    };
}