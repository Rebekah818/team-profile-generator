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
        message: "What is your role?",
        choices: ["Manager", "Engineer", "Intern"],
        name: "Role"

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

function addTeamMember() {
    const promptArray = [{
        type: "list",
        message: "Would you like to add another team member?",
        name: 'addNewMember',
        choices: [
            "add new member", "quit"
        ]
    }];

    return inquirer
        .prompt(promptArray);
};

let employeeArray = [];

async function run() {

    runInquirer()
        .then( async function ({ name, id, email, Role }) {
            if (Role === "Manager") {
              await  runInquirerManager().then(function ({ officeNumber }) {
                    const manager = new Manager(name, id, email, officeNumber);
                    console.log(officeNumber);
                    employeeArray.push(manager);

                });
            } else if (Role === "Engineer") {
               await runInquirerEngineer().then(function ({ github }) {
                    const engineer = new Engineer(name, id, email, github);
                    console.log(github);
                    employeeArray.push(engineer);
                })
            } else if (Role === "Intern") {
              await  runInquirerIntern().then(function ({ school }) {
                    const intern = new Intern(name, id, email, school);
                    console.log(school);
                    employeeArray.push(intern);

                }

                );
            }
            addTeamMember().then(function ({ addNewMember }) {
                if (addNewMember === "add new member") {
                    return run()

                } else {

                    fs.writeFile('newfile.html', returnHtml(employeeArray), function (err) {
                        if (err) throw err;
                        console.log('html created.');
                    });

                }
            }).catch(function (err) {
                console.log("error found");
                console.log(err);



            })




        });







}

run();
