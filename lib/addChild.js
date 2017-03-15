'use strict';

// errorHandler is a function which accepts an error object
const errorHandler = (err) => {
  if (err) { // If there is an error obj, it will be console logged
    return console.log(`Msg: ${err}`);
  };
};


const addChild = (name, naughty, delivered) => {
  if (name === undefined || naughty === undefined || delivered === undefined) {
    return false
  };

  const { Database } = require('sqlite3').verbose();
  const db = new Database('bagOLoot.sqlite', () => console.log('A child is born!'));

  db.run("CREATE TABLE IF NOT EXISTS children (name TEXT, naughty INT, delivered INT)", errorHandler);
  db.run(`INSERT INTO children VALUES ('${name}', ${naughty}, ${delivered})`, errorHandler);

  return true;
}

module.exports = addChild
