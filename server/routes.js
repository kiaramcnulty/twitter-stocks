// import { TwitterClient } from 'twitter-api-client';

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

// const twitterClient = new TwitterClient({
//   apiKey: 'EuIaLWJLgINKLb0DLVYpgonxb',
//   apiSecret: 'nLZv1JWNEzPJomrPDPKfFWWvS60PPmLUA7fRdR36AicTnCQh9W',
//   accessToken: '2390103912-5QOVKCvNF7JqY3u1OFGNmSpJhiDbL9m0qwhml7R',
//   accessTokenSecret: 'DyyWnvYEKjQbEQno3uoESDHs0IXLz8wkMA8uZ61nTamwi',
// });

// // Search for a user
// async function requestData() {
//   console.log("requesting data");
//   const data = await twitterClient.accountsAndUsers.usersSearch({ q: 'twitterDev' });
//   console.log(data);

// }


// async function getRequest() {

//     // Edit query parameters below
//     // specify a search query, and any additional fields that are required
//     // by default, only the Tweet ID and text fields are returned
//     const params = {
//         'query': 'from:twitterdev -is:retweet',
//         'tweet.fields': 'author_id'
//     }

//     const res = await needle('get', endpointUrl, params, {
//         headers: {
//             "User-Agent": "v2RecentSearchJS",
//             "authorization": `Bearer ${token}`
//         }
//     })

//     if (res.body) {
//         return res.body;
//     } else {
//         throw new Error('Unsuccessful request');
//     }
// }

// (async () => {

//         const response = await getRequest();
//         console.log(response);

// })();


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
            console.log("Here")
            console.log(result.data);
            res.status(200).send(result.data);
        })
        // .catch(err => {
        //     res.status(400).send("error");
        // }) 
    })

module.exports = router;