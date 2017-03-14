#!/usr/bin/env node

// requires a stricter form of javascript to alert where there are errors that js would have otherwise ignored
'use strict';

// Require in the Database method from the sqlite3 module
// We will be using the verbose execution mode, which will help with debugging errors. Creates long stack traces
const { Database } = require('sqlite3').verbose();

// Returns a new database object and automatically opens the database
// Database method accepts a callback function for successful connection
// Changes will persist once connection closes
const db = new Database('bagOLoot.sqlite', () => console.log('Connected!'));

// errorHandler is a function which accepts an error object
const errorHandler = (err) => {
  if (err) { // If there is an error obj, it will be console logged
    console.log(`Msg: ${err}`);
  };
};

// Passing in IF NOT EXISTS after CREATE TABLE will check to make sure there are no tables named 'employees'
// If it does exist, this line will not run
db.run("CREATE TABLE IF NOT EXISTS lootbag (name TEXT, toy TEXT, delivered INT)", errorHandler);
