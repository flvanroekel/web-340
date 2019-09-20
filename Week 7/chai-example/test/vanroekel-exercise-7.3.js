/*
============================================
; Title:  chai example
; Author: Faye Van Roekel
; Date:   20 September 2019
; Description: chai Example
;===========================================
*/

var fruits = require("../vanroekel-fruits");

var chai = require("chai");
var assert = chai.assert;


describe("fruits", function(){
  it("should return an array of fruits", function(){
    var f = fruits('Apple,Orange,Mango'); 
    assert(Array.isArray(f)); 
  });
});
