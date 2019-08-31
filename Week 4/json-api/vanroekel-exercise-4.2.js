const header = require('../../Vanroekel-header.js')
                       
console.log(header.display("Faye", "Van Roekel", "Exercise 4.2"));

/*
============================================
; Title:  vanroekel-assignment-4.2.js
; Author: Faye Van Roekel
; Date:   31 August 2019
; Description: json-api
;===========================================
*/

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");


var app = express();


app.use(logger('dev'));


app.get('/customer/:id', function(request, response) {
  
    var id = parseInt(req.params.id, 10);
    res.json({

        firstname: 'Faye',
        lastname: 'VanRoekel',
        employeeId: id
    });
  });



http.createServer(app).listen(8080, function() {
  console.log("Application started and listening on port 8080");
});