const axios = require("axios");
const inquirer = require("inquirer");
const generateHTML = require("./generateHTML");
const fs = require("fs");
const pdf = require("html-pdf");

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
        console.log(response.data);
        console.log(response.data.login);
        console.log(response.data.followers);
        console.log(response.data.following);
        console.log(response.data.repos_url);
        console.log(response.data.bio);
        console.log(response.data.location);
        console.log(response.data.avatar_url);
        const finishedHTML = generateHTML(response.data, data.colors);

        fs.writeFile("./index.html", finishedHTML, function(err) {
            if (err) {
                console.log(err);
            }
        });

        const html = generateHTML(data);
        pdf.create(html).toFile("./profile.pdf", function(err, res) {
            if(err)
            return console.log(err);
            console.log(res);
        })
 
    })
});