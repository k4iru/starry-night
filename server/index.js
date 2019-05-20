require('dotenv').config();
const api_helper = require('./API_helper')
const express = require('express');
const request = require('request');
const app = express();
const key = process.env.DARK_SKY_SECRET;
const port = process.env.PORT || 3000;
const db = require('./queries');
const darksky = 'https://api.darksky.net/forecast/'

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/call', (req, res) => {
    api_helper.make_API_call(`${darksky}${key}/49.9415,-79.5134`)
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.send(error)
        })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
})
