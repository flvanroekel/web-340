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

/**
 * Configures the dependency libraries.
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
      title: "New Users",
      styles: ""
  });
});


app.get("/view/:queryName", function (request, response) {
  var queryName = request.params.queryName;
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


  var entryFirstName = req.body.txtFirstName;
  var entryLastName = req.body.txtLastName;
  var employee = new Employee({
      firstName: entryFirstName,
      lastName: entryLastName
  })
  employee.save(function (error) {
      if (error) throw error;
      console.log("Add Entries: " + entryFirstName + " " + entryLastName);
  });
  res.redirect("/list");
});





http.createServer(app).listen(8080, function() {
  console.log("Application started and listening on port 8080");
});