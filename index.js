const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/employee")
const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const returnHtml = require("./src/index");


function runInquirer() {
    const promptArray = [{
        type: "input",
        message: "Please provide your name",
        name: "name"
    }, {
        type: "input",
        message: "Please provide your id",
        name: "id"
    }, {
        type: "input",
        message: "Please provide you email",
        name: "email"

    },
    {
        type: "list",
        message: "What is your title?",
        choices: ["Manager", "Engineer", "Intern"],
        name: "title"

    }];

    return inquirer
        .prompt(promptArray);

}


function runInquirerManager() {
    const promptArray = [{
        type: "input",
        message: "Please provide your office number",
        name: "officeNumber"
    }]

    return inquirer
        .prompt(promptArray);
}
function runInquirerEngineer() {
    const promptArray = [{
        type: "input",
        message: "Please provide Github account",
        name: "github"
    }]

    return inquirer
        .prompt(promptArray);

}

function runInquirerIntern() {
    const promptArray = [{
        type: "input",
        message: "Please provide school that you attend",
        name: "school"
    }];

    return inquirer
        .prompt(promptArray);
};



async function run() {
    let employeeArray = [];
    const maxTimes = 5;
    for (i = 0; i < maxTimes; i++) {
        const promise = new Promise((resolve, reject) => {
            runInquirer()
                .then(function ({ name, id, email}) {
                    if (this.constructor.name === "Manager") {
                        runInquirerManager().then(function ({ officeNumber }) {
                            this.employee = new Manager(name, id, email, officeNumber);
                            console.log(officeNumber);
                            employeeArray.push(Employee);
                            resolve('done');
                        });
                    } else if (this.constructor.name === "Engineer") {
                        runInquirerEngineer().then(function ({ github }) {
                            this.employee = new Engineer(name, id, email, github);
                            console.log(github);
                            employeeArray.push(Employee);
                        })
                    } else if (this.constructor.name === "Intern") {
                        runInquirerIntern().then(function ({ school }) {
                            this.employee = new Intern(name, id, email, school);
                            console.log(school);
                            employeeArray.push(Employee);
                            resolve("done");
                        });
                    }

                }).catch(function (err) {
                    console.log("error found");
                    console.log(err);



                })

        })
        const result = await promise;
        console.log(result);

    } 
    fs.writeFile('newfile.html', returnHtml(employeeArray), function (err) {
    if (err) throw err;
    console.log('html created.');
});

}




run()
