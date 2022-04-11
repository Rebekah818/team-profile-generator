const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/employee")
const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

function useinquirer() {
    const promptArray = [{
        type: "input",
        message: "Please provide your name",
        name: "name"
    },{
        type:"input",
        message:"Please provide your id",
        name:"id"
    },{
    type:"input",
        message:"Please provide you email",
        name:"email"
    
    },
    {
        type:"list",
        message:"What is your title?",
        choices:["Manager", "Engineer", "Intern"],
        name:"title" 
    
    }];
    
    return inquirer
    .prompt(promptArray);
    
}