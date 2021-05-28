export default class MakeProfileBanner {

    apply = (employeeNum, employeeName, role, phoneNumber, emailAdress) => {
        //Employee info deployed to resturant info section
        let html = `
            <div class="column is-5">
                <img src="images/ansatt_${employeeNum}.png" width="150" height="150">
                <h2>${employeeName}</h2>
                <p>${role}</p>
                <p>${phoneNumber}</p>
                <a href="${emailAdress}">${emailAdress}</a>
            </div>
        `;

        //Deploying the info to the correct section of document
        document.getElementById("employees").innerHTML += html;
        
    };

}