/*
==========================================================
; Title:  exercise-1.3.js
; Author: Faye Van Roekel
; Date:   11 Aug 2019
; Modified By:
; Description: Recreate Module Example
;=========================================================
*/

// Start program

const header = require('../vanroekel-header.js');
console.log(header.display('Faye', 'Van Roekel', 'Exercise 1.3'));

var url = require('url');
var parsedURL = url.parse('https://www.example.com/profile?name=smith');

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);

// End program