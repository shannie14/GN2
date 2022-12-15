//Node runs on a server not in a browser
//window object is browser - explain global objects

const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config()

const mongodb = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const Golf = require('../models/Golf.js');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'client')));
const port = process.env.PORT || 3001;

const connectionStringURI = process.env.NODE_ENV == 'production' ? process.env.MONGODB_URL : `mongodb://127.0.0.1:27017/NBTV`;



let db;

mongoose.connect(connectionStringURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('SK connected to mongodb successfully')
        console.log(Object.keys(mongoose.connection.collections));
    })
//     async (err, client) => {

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});


// Create an endpoint (or route) called /read
app.get('/read', (req, res) => {
    // Access the query parameter that the user will send to us
    const term = req.query.term;
    Golf.find({
        $text: {
            $search: term

        }
    })
        .then(docs => {

            res.send(docs)
        })
});

// Create an endpoint for object ID
app.get('/getById', (req, res) => {
    // Access the query parameter that the user will send to us
    const id = req.query.id;
    Golf.findById(id)
        .then(doc => {

            res.send(doc)
        })
});

// Create our server and turn it on
app.listen(port, function () {

    console.log("hello world");

})