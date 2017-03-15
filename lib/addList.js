'use strict';

// errorHandler is a function which accepts an error object
const errorHandler = (err) => {
  if (err) { // If there is an error obj, it will be console logged
    return console.log(`Msg: ${err}`);
  };
};


const addList = (childName, toy) => {
  if (childName === undefined || toy === undefined) {
    return false
  };

  const { Database } = require('sqlite3').verbose();
  const db = new Database('bagOLoot.sqlite', () => console.log('Making a list and checking it twice!'));

  db.run("CREATE TABLE IF NOT EXISTS toyList (name TEXT, toy TEXT)", errorHandler);
  db.run(`INSERT INTO toyList VALUES ('${childName}', '${toy}')`, errorHandler);

  return true;
}

module.exports = addList
