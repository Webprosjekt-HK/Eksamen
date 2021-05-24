export default class MakeProfileBanner {

    apply = (employeeNum, employeeName, role, phoneNumber, emailAdress) => {
        console.log("Tester");
        let html = `
            <div class="column is-5">
                <img src="images/ansatt_${employeeNum}.png" width="150" height="150">
                <h2>${employeeName}</h2>
                <p>${role}</p>
                <p>${phoneNumber}</p>
                <p>${emailAdress}</p>
            </div>
        `;

        document.getElementById("employees").innerHTML += html;
        
    };

}