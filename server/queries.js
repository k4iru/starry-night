require('dotenv').config()
const api_helper = require('./API_helper');
const key = process.env.DARK_SKY_SECRET;
const darksky = 'https://api.darksky.net/forecast/';

var testObject = {
    "data": []
};

const reserves = {
    "Torrance Barrens Dark Sky Preserve": "/49.9415,-79.5134",
    "McDonald Park": "/49.0504,-122.3045",
    "Cypress Hills Inter-Provincial Park": "/49.6434,-110.0588",
    "Point Pelee National Park": "/41.9628,-82.5184",
    "Beaver Hills Dark Sky Preserve": "/41.3254,-72.9475"
}

const format = data => {

    let i;
    for( i = 0; i < data.daily.data.length; i++) {
        testObject.data.push(data.daily.data[i]);

    }
}
const root = (req, res) => {
    res.send('Hello World!');
}

const call = (req, res) => {
    var loc = req.query.location;
    console.log(loc);
    console.log(reserves[loc]);
    api_helper.make_API_call(`${darksky}${key}${reserves[loc]}`)
        .then(response => {

            testObject.data = []
            format(response)
            res.json(testObject)

            //res.json(response)
        })
        .catch(error => {
            res.send(error)
        })
}

module.exports = {
    root,
    call,
}

