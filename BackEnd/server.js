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

// Establishing a connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'workout'
});

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


/*var Workout1 = {
    getWorkout: function (callback) {
      // run query
      return connection.query('SELECT * FROM workoutone', callback);
    }
  }
  
  // function to get data from accom table
  app.get('/api/workout', function (req, res) {
    Workout1.getWorkout(function (err, data) {
      if (err) res.status(400).send(err)
  
      // Complete - send callback
      res.send(data);
      console.log(data);
    });
  });



  var Workout2 = {
    getWorkout: function (callback) {
      // run query
      return connection.query('SELECT * FROM workouttwo', callback);
    }
  }
  
  // function to get data from accom table
  app.get('/api/workout', function (req, res) {
    Workout2.getWorkout(function (err, data) {
      if (err) res.status(400).send(err)
  
      // Complete - send callback
      res.send(data);
      console.log(data);
    });
  });

*/
// Listing to port number 8081 @ http://localhost:8081/
app.listen(8081, function () {
    console.log('connected to port 8081')

})