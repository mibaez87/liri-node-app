var request = require("request");
var inquirer = require("inquirer");
var twitter = require("twitter");
var spotify = require('node-spotify-api');
require("dotenv").config();
var keys = require("./keys.js");


var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

inquirer
    .prompt([
        {
            type: "list",
            message: "Hello, I'm Liri. How can I help?",
            choices: ["View Tweets", "Spotify Search", "Movie Search", "Surprise Me"],
            name: "menu"
        }
    ])
    .then(function(inquirerResponse){
        console.log("I'm ready");
    });