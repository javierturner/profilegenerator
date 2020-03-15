const fs = require("fs");

function generateHTML(data, color) {
    const htmlTemplate = `
     <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
body {
    background-color: black;
    }
div {
  color: ;
  border: 2px solid;
}
p {
    padding-left: 10px;
    font-family: verdana;
    color: white;
}
img  {
  height: 200px;
  width: 200px;
  padding-top: 10px;
  padding-left: 10px;
}
</style>
</head>
<body>
<h1 style = 'color: ${data.data.color}'>${data.data.name}</h1>
<div>    
<img src = "${data.data.avatar_url}">
    
                <p>Username: ${data.data.login}</p>
                <p>Followers: ${data.data.followers}</p>
                <p>Following: ${data.data.following}</p>
                <p>Repo URL: ${data.data.repos_url}</p>
                <p>Bio: ${data.data.bio}</p>
                <p>Location: ${data.data.location}</p>
                <p>Avatar URL: ${data.data.avatar_url}</p>
    </div>
    
</body>
</html>
     `
     return htmlTemplate
}

module.exports = generateHTML;