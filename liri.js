require("dotenv").config();
var request = require("request");
var inquirer = require("inquirer");
var Twitter = require("twitter");
var spotify = require('node-spotify-api');
var keys = require("./keys.js");
var userPick = process.argv[2];

if (userPick === "my-tweets") {
    console.log("Show me the tweets");
}

// var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

inquirer
    .prompt([{
        type: "list",
        message: "Hello, I'm Liri. How can I help?",
        choices: ["View Tweets", "Spotify Search", "Movie Search", "Surprise Me"],
        name: "choice"
    }])
    .then(function (user) {
        if (user.choice === "View Tweets") {
            client.get("statuses/user_timeline", {
                    screen_name: "VirtualVisionz"
                },
                function (error, tweets, response) {
                    if (!error) {
                        tweets.forEach(function (element) {
                            console.log("Created On: " + element.created_at + "    " + element.text);
                        })
                    }
                });
        }
    });