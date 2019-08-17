
/*
;============================================
; Title:  vanroekel-exercise-2.2.js
; Author: Faye Van Roekel
; Date:   17 Aug 2019
; Modified By: Faye Van Roekel
; Description: Hello World with Express
;============================================
*/
//start program


const header = require('../Vanroekel-header.js')
                       
console.log(header.display("Faye", "Van Roekel", "Exercise 2.2"));



var express = require('express');
var http = require('http');


var app = express();

app.use(function(req, res)
{
    console.log('In comes a request to: %s', req.url);

    res.end('Hello World\n');
})


http.createServer(app).listen(8080, function()
{
    console.log('Application started on port %s', 8080);
});
