// Search for Tweets within the past seven days
// https://developer.twitter.com/en/docs/twitter-api/tweets/search/quick-start/recent-search

const needle = require('needle');
const axios = require('axios');

// The code below sets the bearer token from your environment variables
// To set environment variables on macOS or Linux, run the export command below from the terminal:
// export BEARER_TOKEN='YOUR-TOKEN'
// const token = process.env.BEARER_TOKEN;
const token = 'AAAAAAAAAAAAAAAAAAAAAB%2FYPgEAAAAAgJxzmS02sHHN4CpHUB%2BkLRwF2OU%3DYebWHcaEqeuLioTDMNON0IvtbxEzzXiYEGsjWH3iOregXNbEL2';

const endpointUrl = "https://api.twitter.com/2/tweets/search/recent";

async function getRequest() {

    // Edit query parameters below
    // specify a search query, and any additional fields that are required
    // by default, only the Tweet ID and text fields are returned
    const params = {
        'query': 'AAPL'
    }

    // const res = await needle('get', endpointUrl, params, {
    //     headers: {
    //         "User-Agent": "v2RecentSearchJS",
    //         "authorization": `Bearer ${token}`
    //     }
    // })
    // if (res.body) {
    //     console.log("THIS IS RES " + res);
    //     return res.body;
    // } else {
    //     throw new Error('Unsuccessful request');
    // }

    axios.default.headers = {
        "User-Agent": "v2RecentSearchJS",
        "authorization": `Bearer ${token}`
    }

    const res = await axios.get(endpointUrl + "?query=AAPL", {
        headers: {
            "User-Agent": "v2RecentSearchJS",
            "authorization": `Bearer ${token}`
        }
    })

    // const data = res.json();
    // console.log("TEST ", res.data);
    return res.data;
    // console.log(res);
    // if (data) {
    //     // console.log("THIS IS RES " + res.data);
    //     return data;
    // } else {
    //     throw new Error('Unsuccessful request');
    // }
}

// async function getData() {
//     // const response = await getRequest();
//     // return response;
//     try {
//         // Make request
//         const response = await getRequest();
//         console.log(response)

//     } catch (e) {
//         console.log(e);
//         process.exit(-1);
//     }
//     process.exit();
// }

async function getData() {
    const response = await getRequest();
    return response;

}

const data = getRequest();
console.log("LOG " + data);