/*
;=====================================
; Title:  vanroekel-assignment-2.4.js
; Author: Faye Van Roekel
; Date:   18 Aug 2019
; Description: EJS Views
;=====================================
*/
//start program

const header = require('../Vanroekel-header.js')
                       
console.log(header.display("Faye", "Van Roekel", "Exercise 2.4"));

var http = require("http");
var express = require("express"); 
var path = require("path"); 
var app = express(); 

app.set("views", path.resolve(__dirname, "views")); 
app.set("view engine", "ejs"); 

app.get("/", (request, response) => {
    response.render("index", {
        message: "Welcome to the homepage!"
    });

app.get("/", (req, res) => { 
  response.render("index", { 
    firstName: "Faye", 
    lastName: "Van Roekel",
    address: "752 2nd St. Circle SE, Sioux Center, IA"
  })
});

app.use((req, res) => {
  res.render("error", {
    message: "Unable to view this page"
  })
})

app.listen(8080, () => {
  console.log("EJS-Views app started port 8080");
})

//end program