#!/usr/bin/env node

const { Database } = require('sqlite3').verbose();
const db = new Database('bagOLoot.sqlite', () => console.log('Removed tables!'));

db.run(`DROP TABLE children`);
db.run(`DROP TABLE toyList`);
db.run(`DROP TABLE lootbag`);
