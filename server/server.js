//Node runs on a server not in a browser
//window object is browser - explain global objects

const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config()

const mongodb = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const Golf = require('./models/Golf.js');
const User = require('./models/User');
const app = express();

// Express Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client')));

const port = process.env.PORT || 3001;

const connectionStringURI = process.env.NODE_ENV == 'production' ? process.env.MONGODB_URL : `mongodb://localhost:27017/NBTV`;
console.log(connectionStringURI)



let db;

mongoose.connect(connectionStringURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('SK connected to mongodb successfully', connectionStringURI,)


    })
//     async (err, client) => {

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});


// Create an endpoint (or route) called /read
app.get('/read', (req, res) => {
    console.log('hello')
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

//Create an endpoint for login
app.post('/login', (req, res) => {
    // Grab username and password
    // Username and password is located in the body of the request
    const username = req.body.apple;
    const password = req.body.password;
    console.log('what is username password', username, password)
    // Check to see if these credentials are correct

    User.findOne({
        username,
        password
    })
        .then(user => {
            console.log('user returned from database', user)
            res.send(user)
        })


})

// Create our server and turn it on
app.listen(port, function () {

    console.log("hello world");

})