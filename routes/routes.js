// import { TwitterClient } from 'twitter-api-client';
//// "start": "cross-env NODE_ENV=development nodemon index.js",

const express = require("express");
const router = express.Router();


router.route("/")
    .get((_req, res) => {
        console.log("GET /");
        res.status(200).send({
            data: "App is running."
        });
    });
    
// ---------------------------------------------------
// Edit below this line
// ---------------------------------------------------

const axios = require('axios');

// The code below sets the bearer token from your environment variables
// To set environment variables on macOS or Linux, run the export command below from the terminal:
// export BEARER_TOKEN='YOUR-TOKEN'
// const token = process.env.BEARER_TOKEN;
const token = 'AAAAAAAAAAAAAAAAAAAAAB%2FYPgEAAAAAgJxzmS02sHHN4CpHUB%2BkLRwF2OU%3DYebWHcaEqeuLioTDMNON0IvtbxEzzXiYEGsjWH3iOregXNbEL2';

const endpointUrl = "https://api.twitter.com/2/tweets/search/recent";


router.route("/stocks")
    .get((req, res) => {
        console.log("GET /stocks");

        const params = {
            'query': 'from:twitterdev -is:retweet',
            'tweet.fields': 'author_id'
        }
    
        axios.get(endpointUrl + "?query=AAPL", {
            headers: {
                "User-Agent": "v2RecentSearchJS",
                "authorization": `Bearer ${token}`
            }
        }).then(result => {
            console.log(result.data);
            res.status(200).send(result.data);
        })
    })

router.route("/stocks/:id")
    .get((req, res) => {
        console.log("GET /stocks");

        const params = {
            'query': 'from:twitterdev -is:retweet',
            'tweet.fields': 'author_id'
        }

        axios.get(endpointUrl + "?query="+req.params.id, {
            headers: {
                "User-Agent": "v2RecentSearchJS",
                "authorization": `Bearer ${token}`
            }
        }).then(result => {
            console.log("Here")
            console.log(result.data);
            res.status(200).send(result.data);
        });
    })

module.exports = router;