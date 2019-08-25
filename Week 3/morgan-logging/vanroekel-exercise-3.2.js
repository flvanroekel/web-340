/*
============================================
; Title:  vanroekel-exercise-3.2.js
; Author: Faye Van Roekel
; Date:   25 August 2019
; Description: Logging
;===========================================
*/

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));

app.get("/", function(request, response) {
    response.render("index", {
      message: "Welcome to My Logging Exercise!"
    });
  });


  http.createServer(app).listen(8080, function() {
    console.log("Application started on port %s", 8080);
  });
