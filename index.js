const axios = require("axios");
const inquirer = require("inquirer");
const generateHTML = require("./generateHTML");
// const fs = require("fs");
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
]).then(function ({githubUsername, colors}) {
    const queryUrl = `https://api.github.com/users/${githubUsername}`;
    axios.get(queryUrl).then(function (data) {
      data.data.color = colors;
            const html = generateHTML(data);
        
            pdf.create(html).toFile('./profile.pdf', function(err, res) {
              if (err) 
              return console.log(err);
              console.log(res);
            });
        
        })
    });
    // init();

  