const express = require('express');
const { add } = require('../models/diningHall.js');
const app = express.Router();

app
.post('/', (req, res) => { // this will POST a new dining hall to the database from the request body
    add(req.body)
    .then(x => res.status(200).send(x)); // send the new dining hall back to the client
})

module.exports = app