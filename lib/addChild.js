'use strict';

const addChild = (name, naughty, delivered) => {
  console.log(name, naughty, delivered);
  const { Database } = require('sqlite3').verbose();
  const db = new Database('bagOLoot.sqlite', () => console.log('Connected!'));

  db.run("CREATE TABLE IF NOT EXISTS children (name TEXT, naughty INT, delivered INT)");
  db.run(`INSERT INTO children VALUES ('${name}', ${naughty}, ${delivered})`);
  return true;
}

module.exports = addChild
