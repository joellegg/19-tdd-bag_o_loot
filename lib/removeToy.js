'use strict';

// errorHandler is a function which accepts an error object
const errorHandler = (err) => {
  if (err) { // If there is an error obj, it will be console logged
    return console.log(`Msg: ${err}`);
  };
};


const removeToy = (child, toyName) => {
  if (toyName === undefined || child === undefined) {
    return false
  }

  const { Database } = require('sqlite3').verbose();
  const db = new Database('bagOLoot.sqlite', () => console.log(`Removing the ${toyName} for the naughty child ${child}!`));

  db.run(`DELETE FROM toyList WHERE toyList.name = '${child}' AND toyList.toy = '${toyName}'`, errorHandler);
  return true;
}

module.exports = removeToy
