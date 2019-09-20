/*
============================================
; Title:  tdd example
; Author: Faye Van Roekel
; Date:   19 September 2019
; Description: TDD Example
;===========================================
*/


const header = require('../vanroekel-header.js');

console.log(header.display('Faye', 'Van Roekel', 'Exercise 7.2'));


var assert = require("assert");

describe("String#split", function() {

    it("should return an array of fruits", function() {

        assert(Array.isArray('Apple,Orange,Mango'.split(',')));

    });

});

function getFruits(str) {

    return str.split(',');

   }

   module.exports = getFruits;