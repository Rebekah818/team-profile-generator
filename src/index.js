
function displayVariation (employee) {
    switch (employee.getRole()) {
        case "Manager":
            return `office number: ${employee.getOfficeNumber()}`;
        case "Intern":
            return `School attending: ${employee.getSchool()}`;
        default:
            return `Github: ${employee.getGitHub()}`;
         

        
    }   
};


// add function to render the html 
function getCardHtml(employeeArray) {
    let html = "";
    for (i = 0; i < employeeArray.length; i++) {
        console.log(employeeArray[i])
        html += `<div class= "card justify-content-center align-items-center" style="width: 18rem;" >
        <div class="col card-header">
            <h3>${employeeArray[i].name}</h3>
        </div>
        <div class="col card-header">
            <h3>${employeeArray[i].getRole()}</h3>
        </div>

        <ul class="list-group list-group-flush text">
            <li class="list-group-item">ID: ${employeeArray[i].id}</li>
             <li class="list-group-item">email: ${employeeArray[i].email}</li>
             <li class="list-group-item"> ${displayVariation(employeeArray[i])}</li>
        </ul>

        </div >`
    }
    return html;
}
module.exports = (employeeArray) => 
`< !DOCTYPE html >
<html lang="en">
    <head>
        <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
                        <title>Document</title>
                        <style>
                            .row {
                                display: flex;
                                flex-wrap: wrap;
                                justify-content: center;
                                margin-top: 20px;
                                margin-bottom: 20px;
                            }
                            .card {
                                padding: 15px;
                                border-radius: 6px;
                                background-color: white;
                                color: lightskyblue;
                                margin: 15px;
                            }
                            .text {
                                padding: 15px;
                                border-radius: 6px;
                                background-color: lightskyblue;
                                color: black;
                                margin: 15px;
                            }
                            .col {
                                flex: 1;
                                text-align: center;
                            }
                        </style>
                    </head>
                    <body>
                        <nav class="navbar navbar-dark bg-dark justify-content-center align-items-center">
                            <span class="navbar-brand mb-0 h1">
                                <h1>My Team</h1>
                            </span>
                        </nav>
                        <div class="row">
                            ${getCardHtml(employeeArray)}
                        </div>
                    </body>

</html>
`