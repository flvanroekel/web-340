/*
=======================================
; Title:  app.js
; Author: Faye Van Roekel
; Date:   25 September 2019
; Description: EJS layouts
;======================================
*/

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var mongoose = require('mongoose');
var bodyParser = require("body-parser");
var mongo = require('mongodb');
var Employee = require("./models/employee");
var helmet = require("helmet");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
var csrfProtection = csrf({cookie: true});


var mongoDb = "mongodb+srv://new-user_25:testuser1@buwebdev-cluster-1-2fw4y.mongodb.net/ems"; 

mongoose.connect(mongoDb, { 
  useMongoClient: true 
});

mongoose.Promise = global.Promise; 
var db = mongoose.connection; 
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

db.once('open', function () {
  console.log('Application connected to mLab');
});


var csrfProtection = csrf({ cookie: true });

/**
 * Initializes the express application.
 */

var app = express();
// Body parser
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
// Cookie parser
app.use(cookieParser());

// CSRF protection
app.use(csrfProtection);
/**
 * Intercepts all incoming requests and adds a CSRF token to the response.
 */
app.use(function(req, res, next) {
  var token = req.csrfToken();
  res.cookie('XSRF-TOKEN', token);
  res.locals.csrfToken = token;
  next();
});

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set('port', process.env.PORT || 8080);

app.use(logger("short"));
app.use(helmet.xssFilter());


app.use(express.static(path.join(__dirname, 'styles')));


app.get("/", function (req, res) {
  res.render("index", {
      title: "Homepage",
      styles: "/styles/index-styles.css"
  });
});

app.get("/new", function(req, res){
  res.render("new", {
      title: "New Employee",
      styles: ""
  });
});


app.get("/view/:FirstName/:LastName", function (request, response) {
  var firstName = req.params["firstName"];
  var lastName = req.params["lastName"];

  Employee.find({'lastName': queryName}, function(error, employees) {
      if (error) throw error;
      if (employees.length > 0) {
          response.render("view", {
              title: "User Records",
              employee: employees,
              styles: ""
          })
      }else{
          response.redirect("/list")
      }
  });


});

app.get("/edit/:firstName/:lastName", (req, res) => {
  var firstName = req.params["firstName"];
  var lastName = req.params["lastName"];

  Employee.find({ firstName: firstName, lastName: lastName }, function(
    error,
    employee
  ) { 
    if (error) throw err;

    if (employee != null) {
      res.render("edit", {
        title: "Edit Employee Record",
        employee: employee
      });
    } else {
      res.redirect("/");
    }
  });
});

app.get("/list", function(req, res){
  Employee.find({},function(error, employees){
      if(error) throw error;
      res.render("list", {
          title:"User List",
          employees: employees,
          styles: ""
      });
  });
});

app.get("/", function(request, response) {
  response.render("index", {
    title: "Homepage"
  });
});

app.post("/process", function(req, res) {
  if (!req.body.txtFirstName || !req.body.txtLastName) {
      res.status(400).send("Name is required");
      return;
  }

app.post("/edit", (req, res) => {
  if (!req.body.txtFirstName || !req.body.txtLastName) {
      res.status(400).send("Entries require a name");
      return;
  }

  var entryFirstName = req.body.txtFirstName;
  var entryLastName = req.body.txtLastName;
  var employee = new Employee({
      firstName: req.body.txtFirstName,
      lastName: req.body.txtLastName
  });
  employee.save((error) =>{
      if (error) throw error;
      console.log(emp+"Data has been saved! ");
  });
  res.redirect("/"); 
});


Employee.findAndUpdate(
  { _id: req.body.hiddenId },
  {
    $set: {
      firstName: req.body.txtFirstName,
      lastName: req.body.txtLastName
    }
  }, function(
  error, employee) {
    if (error) throw err;
    console.log(employee + " Employee Record is Updated");
  });

  res.redirect("/");
});

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), function() {
  
  console.log("Application started on port " + app.get("port"));
});

http.createServer(app).listen(8080, function() {
  console.log("Application started and listening on port 8080");
});