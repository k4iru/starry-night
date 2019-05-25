require('dotenv').config()
const api_helper = require('./API_helper');
const key = process.env.DARK_SKY_SECRET;
const darksky = 'https://api.darksky.net/forecast/';

var testObject = {
    "data": []
};

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
    api_helper.make_API_call(`${darksky}${key}/49.9415,-79.5134`)
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

