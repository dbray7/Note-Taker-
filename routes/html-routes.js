var path = require("path");
var express = require('express');
var router = express.Router();


// "/notes" responds with the notes.html file
router.get("/notes", function (req, res) {
    res.sendFile('notes.html', {
        root: path.join(__dirname, '../public')
    })
});

// All other routes respond with the index.html file
router.get("/", function (req, res) {
    res.sendFile('index.html', {
        root: path.join(__dirname, '../public')
    })
});

module.exports = router;