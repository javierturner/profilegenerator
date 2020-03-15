const axios = require("axios");
const inquirer = require("inquirer");
const generateHTML = require("./generateHTML")
const fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        message: "What is your Github username?",
        name: "githubUsername"
    },
    {
        type: "list",
        message: "What is your favorite color?",
        name: "colors",
        choices: [
            "red",
            "yellow",
            "green",
            "purple"
        ]
    }
])