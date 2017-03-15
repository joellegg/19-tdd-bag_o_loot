'use strict';

// errorHandler is a function which accepts an error object
const errorHandler = (err) => {
  if (err) { // If there is an error obj, it will be console logged
    return console.log(`Msg: ${err}`);
  };
};


const addToy = (toyName) => {
  if (toyName === undefined) {
    return false
  }

  const { Database } = require('sqlite3').verbose();
  const db = new Database('bagOLoot.sqlite', () => console.log('Adding toy for the child!'));

  db.run("CREATE TABLE IF NOT EXISTS lootbag (toy TEXT)", errorHandler);
  db.run(`INSERT INTO lootbag VALUES ('${toyName}')`, errorHandler);
  return true;
}

module.exports = addToy
