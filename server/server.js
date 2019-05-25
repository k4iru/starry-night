require('dotenv').config();
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5010;
const db = require('./queries');

// Routes

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', db.root)

app.get('/call', db.call)

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
})
