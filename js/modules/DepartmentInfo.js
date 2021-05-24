export default class DepartmentInfo {

    deploy = (name, address, weekHours, weekendHours, phoneNumber, emailAddress, mapLocation) => {

        let info = `
            <div>
                <p class="title">${name}</p>
                <p>${address}</p>
                <p>${weekHours}</p>
                <p>${weekendHours}</p>
                <p>${phoneNumber}</p>
                <a href="mailto:${emailAddress}">${emailAddress}</a>
            </div>
        `;

        let mapImage = `
            <img src="images/${mapLocation}">
        `;

        document.getElementById("departmentInfo").innerHTML += info;
        document.getElementById("mapImage").innerHTML += mapImage;

    };
}