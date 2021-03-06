require('dotenv').config();
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const cors = require('cors')
const port = process.env.PORT || 5010;
const db = require('./queries');
const path = require('path');
const app = express();

// Routes

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/call', db.call)

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
})

