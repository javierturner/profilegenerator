const axios = require("axios");
const inquirer = require("inquirer");
const generateHTML = require("./generateHTML");
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
]).then(function(data) {
    console.log(data.githubUsername);
    console.log(data.colors);

    axios.get("https://api.github.com/users/" + data.githubUsername)
    .then(function(response) {
        console.log(resonse.data);
        console.log(resonse.data.login);
        console.log(resonse.data.followers);
        console.log(resonse.data.following);
        console.log(resonse.data.repos_url);
        console.log(resonse.data.bio);
        console.log(resonse.data.location);
        console.log(resonse.data.avatar_url);
        const finishedHTML = generateHTML(response.data, data.colors);

        fs.writeFile("./index.html", finishedHTML, function(err) {
            if (err) {
                console.log(err);
            }
        });
    })
});