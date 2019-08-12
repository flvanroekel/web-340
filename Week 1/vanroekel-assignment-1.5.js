/*
============================================
; Title:  assignment-1.5-hello-world.js
; Author: Faye Van Roekel
; Date:   11 Aug 2019
; Modified By:
; Description: Node js Server Example
;===========================================
*/

// Start program

const header = require('../Vanroekel-header.js')
                       
console.log(header.display("Faye", "Van Roekel", "Exercise 1.5"));


var http = require('http');

function processRequest(req, res) {
  var body = "Yesterday was history, tomorrow is a mystery, today is a gift that's why we call it the present.";
  var contentLength = body.length;
  res.writeHead(200, {
    'Content-Length': contentLength,
    'Content-Type': 'text/plain'
  });
  res.end(body);
}

var s = http.createServer(processRequest);
s.listen(8080);

// End program