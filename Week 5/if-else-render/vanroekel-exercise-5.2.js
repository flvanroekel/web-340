// requires

var express = require('express');
var http = require('http');
var path = require('path');

//app functions

var app = express();
app.set('views', path.resolve(_dirname, 'views'));
app.set('view engine', 'ejs');

// local composer array

var composers = [
    "Back",
    "Mozart",
    "Beethoven",
    "Verdi"
]

// routes

app.get('/', function(req, res) {
    res.render('index', {
        names: composers
    })
})

// create server

http.createServer(app).listen(3000, function() {
    console.log('Application started and listening on port 3000');  
});
