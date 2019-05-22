require('dotenv').config();
const express = require('express');
const request = require('request');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./queries');

// Routes
app.get('/', db.root)

app.get('/call', db.call)

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
})
