/*
============================================
; Title:  employee.js
; Author: Faye Van Roekel
; Date:   20 September 2019
; Description: File for the Employee database model
;===========================================
*/

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var employeeSchema = new Schema({
    firstName: String,
    lastName: String
});

var Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;

