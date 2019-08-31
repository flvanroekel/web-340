const header = require('../../Vanroekel-header.js')
                       
console.log(header.display("Faye", "Van Roekel", "Exercise 4.3"));

/*
============================================
; Title:  vanroekel-assignment-4.3.js
; Author: Faye Van Roekel
; Date:   31 August 2019
; Description: status-codes
;===========================================
*/

var express = require("express");
var http = require("http");
var logger = require("morgan");


var app = express();


app.use(logger('dev'));


app.get('/notfound', function(request, response) {
  
    res.status(404);
    
    res.json({
        error: 'Resource not found'
    });
  });

  app.get('/ok', function(request, response) {
  
    res.status(200);
    
    res.json({
        error: 'Page loaded correctly'
    });
  });


  app.get('/not-implemented', function(request, response) {
  
    res.status(501);
    
    res.json({
        error: 'Page not implemented'
    });
  });



http.createServer(app).listen(3000, function() {
  console.log("Application started and listening on port 3000");
});