'use strict';

// errorHandler is a function which accepts an error object
const errorHandler = (err) => {
  if (err) { // If there is an error obj, it will be console logged
    return console.log(`Msg: ${err}`);
  };
};


const listToysChild = (childName) => {
  if (childName === undefined) {
    childName = 'all the children'
  }

  const { Database } = require('sqlite3').verbose();
  const db = new Database('bagOLoot.sqlite', () => console.log(`Listing toys for ${childName}!`));

  db.run("CREATE TABLE IF NOT EXISTS toyList (toy TEXT)", errorHandler);
  // db.run(`INSERT INTO lootbag VALUES ('${childName}')`, errorHandler);
  return true;
}

module.exports = listToysChild

// SELECT c.name, t.toy
// FROM toyList t
// LEFT JOIN children c ON t.name = c.name
// WHERE c.name='suzy' AND c.naughty=0

// SELECT c.name, t.toy
// FROM toyList t
// LEFT JOIN children c ON t.name = c.name
// WHERE c.naughty=0
// ORDER BY c.name
