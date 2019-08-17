const header = require('../Vanroekel-header.js')
                       
console.log(header.display("Faye", "Van Roekel", "Exercise 2.3"));
/*
;============================================
; Title:  vanroekel-exercise-2.3.js
; Author: Faye Van Roekel
; Date:   17 Aug 2019
; Modified By: Faye Van Roekel
; Description: Routes
;============================================
*/
//start program

var express = require('express');
var http = require('http');


var app = express();

app.get('/', function(req, res){
    res.end('Welcome to the homepage\n');
});

app.get('/about', function(req, res)
{
    res.end('Welcome to the about page\n');
});

app.get('/contact', function(req, res)
{
    res.end('Welcome to the contact page\n');
});

app.use(function(req, res)
{
    res.statsCode = 404;
    res.end('404!\n');
});

http.createServer(app).listen(3000, function() {
    console.log('Application started on port %s', 3000);
});
