var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your username?",
    },
    {
        type: "list",
        name: "color",
        message: "What is your favorite color?",
        choices: [
            "red",
            "orange",
            "yellow",
            "green",
            "blue",
            "purple",
            "black",
            "white",
            "gray",
        ]
    },

])