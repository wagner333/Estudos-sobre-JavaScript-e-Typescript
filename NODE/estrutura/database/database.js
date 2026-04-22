const sqlite3 = require("sqlite3").verbose();
const database = new sqlite3.Database("database.db");
database.serialize(() => {
  database.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE
    )
  `);
});

module.exports = database;
