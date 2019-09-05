const header = require('../../Vanroekel-header.js')
                       
console.log(header.display("Faye", "Van Roekel", "Exercise 4.4"));


/*
;===================================
; Title: vanroekel-exercise-5.2.js
; Author: Faye Van Roekel
; Date: 5 Sept 2019
; Description: If/Else/Render
;===================================
*/


// requires

var express = require('express');
var http = require('http');
var path = require('path');

//app functions

var app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// local composer array

var people = [
    "Gorman",
    "Schaefer",
    "DeLaney",
    "Ryan"
];

// routes

app.get('/', function(req, res) {
    res.render('index', {
        names: people
    })
});

// create server

http.createServer(app).listen(3000, function() {
    console.log('Application started and listening on port 3000');  
});
