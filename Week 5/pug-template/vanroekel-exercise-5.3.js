const header = require('../../Vanroekel-header.js')
                       
console.log(header.display("Faye", "Van Roekel", "Exercise 5.3"));


/*
;===================================
; Title: vanroekel-exercise-5.3.js
; Author: Faye Van Roekel
; Date: 5 Sept 2019
; Description: Pug Template
;===================================
*/


var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", function(request, response) {
  response.render("index", {
    message: "Here is my PUG Assignment!"
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started and listening on port 8080");
});