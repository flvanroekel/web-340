/*
============================================
; Title:  app.js
; Author: Faye Van Roekel
; Date:   12 September 2019
; Description: Demonstrates MongoDB connection
;===========================================
*/

var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");


var mongoDB = "mongodb+srv://new-user_25:testuser1@buwebdev-cluster-1-2fw4y.mongodb.net/ems";
mongoose.connect(mongoDB, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function() {
  console.log("Application connected to mLab MongoDB instance");
});


var app = express();
app.use(logger("short"));


http.createServer(app).listen(5000, function() {
  console.log("Application connected and listening on port 5000");
});