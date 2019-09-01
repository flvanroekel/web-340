const header = require('../../Vanroekel-header.js')
                       
console.log(header.display("Faye", "Van Roekel", "Exercise 4.4"));

/*
============================================
; Title:  vanroekel-assignment-4.4.js
; Author: Faye Van Roekel
; Date:   01 September 2019
; Description: cURL
;===========================================
*/

var express = require("express");
var http = require("http");
var logger = require("morgan");


var app = express();


app.use(logger('dev'));


app.get("/", function(request, response) {
    response.send("API invoked HTTP GET request.");
  });
  
  app.put("/", function(request, response) {
    response.send("API invoked HTTP PUT request.");
  });
  
  app.post("/", function(request, response) {
    response.send("API invoked HTTP POST request");
  });
  
  app.delete("/", function(request, response) {
    response.send("API invoked HTTP DELETE request");
  });
  
  http.createServer(app).listen(8080, function() {
    console.log("Application started and listening on port 8080");
  });







