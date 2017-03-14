#!/usr/bin/env node

const { Database } = require('sqlite3').verbose();
const db = new Database('bagOLoot.sqlite', () => console.log('Removed lootbag!'));

db.run(`DROP TABLE lootbag`);
