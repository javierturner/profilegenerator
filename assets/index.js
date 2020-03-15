const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your Github username?",
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
]).then(function({username}) {
    const queryURL = `https://api.github.com/users/${username}/repos?per_page=100`;

    axios.get(queryURL).then(function(res) {
        const repoName = res.data.map(function(repo) {
            return repo.name;
        });

        console.log(repoName);
    })
})