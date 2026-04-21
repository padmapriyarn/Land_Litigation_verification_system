const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database/land.db');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS land (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        district TEXT,
        village TEXT,
        surveyNumber TEXT,
        owner TEXT,
        caseStatus TEXT
    )`);
});

module.exports = db;