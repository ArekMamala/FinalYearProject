/* 
All information from https://www.npmjs.com/package/mysql#introduction
Please do a npm install before using server.js
Enter in command line 'npm install mysqljs/mysql'
*/
var express = require('express');
var mysql = require('mysql');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');

// Establishing a connection with AWS
var connection = mysql.createConnection({
  host: '18.206.137.252',
  user: 'admin',
  password: 'admin',
  database: 'asuboxing'
});

/* Establishing a connection (Local Database)
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'asuboxing'
});*/

// Connecting to the database
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

// Here we are configuring express to use body-parser as middle-ware. 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(corsOptions = {
    origin: '*',
    credentials: true
  }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Getting information from the database
app.get('/api/day1', function (req, res){
  days = 'Day-1';
  sql = 'SELECT * FROM workouts WHERE days = ' + connection.escape(days);
  connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.json(results);
  });
})

app.get('/api/day2', function (req, res){
  days = 'Day-2';
  sql = 'SELECT * FROM workouts WHERE days = ' + connection.escape(days);
  connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.json(results);
  });
})

app.get('/api/day4', function (req, res){
  days = 'Day-4';
  sql = 'SELECT * FROM workouts WHERE days = ' + connection.escape(days);
  connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.json(results);
  });
})

app.get('/api/day5', function (req, res){
  days = 'Day-5';
  sql = 'SELECT * FROM workouts WHERE days = ' + connection.escape(days);
  connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.json(results);
  });
})

app.get('/api/day7', function (req, res){
  days = 'Day-7';
  sql = 'SELECT * FROM workouts WHERE days = ' + connection.escape(days);
  connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.json(results);
  });
})

app.get('/api/mealday1', function (req, res){
  weekday = 'Monday';
  sql = 'SELECT * FROM meals WHERE weekday = ' + connection.escape(weekday);
  connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.json(results);
  });
})

app.get('/api/mealday2', function (req, res){
  weekday = 'Tuesday';
  sql = 'SELECT * FROM meals WHERE weekday = ' + connection.escape(weekday);
  connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.json(results);
  });
})

app.get('/api/mealday3', function (req, res){
  weekday = 'Wednesday';
  sql = 'SELECT * FROM meals WHERE weekday = ' + connection.escape(weekday);
  connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.json(results);
  });
})

app.get('/api/mealday4', function (req, res){
  weekday = 'Thursday';
  sql = 'SELECT * FROM meals WHERE weekday = ' + connection.escape(weekday);
  connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.json(results);
  });
})

app.get('/api/mealday5', function (req, res){
  weekday = 'Friday';
  sql = 'SELECT * FROM meals WHERE weekday = ' + connection.escape(weekday);
  connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.json(results);
  });
})

app.get('/api/mealday6', function (req, res){
  weekday = 'Saturday';
  sql = 'SELECT * FROM meals WHERE weekday = ' + connection.escape(weekday);
  connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.json(results);
  });
})

app.get('/api/mealday7', function (req, res){
  weekday = 'Sunday';
  sql = 'SELECT * FROM meals WHERE weekday = ' + connection.escape(weekday);
  connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.json(results);
  });
})


// Listing to port number 8081 @ http://localhost:8081/
app.listen(8081, function () {
    console.log('connected to port 8081')

})