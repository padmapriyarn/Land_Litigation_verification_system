const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./database/db');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// 🔍 SEARCH
app.post('/search', (req, res) => {
    const { district, village, surveyNumber } = req.body;

    db.all(
        `SELECT * FROM land WHERE district=? AND village=? AND surveyNumber=?`,
        [district, village, surveyNumber],
        (err, rows) => {
            if (err) res.status(500).send(err);
            else res.json(rows);
        }
    );
});

// ➕ ADD DATA (ADMIN)
app.post('/add', (req, res) => {
    const { district, village, surveyNumber, owner, caseStatus } = req.body;

    db.run(
        `INSERT INTO land (district, village, surveyNumber, owner, caseStatus)
         VALUES (?, ?, ?, ?, ?)`,
        [district, village, surveyNumber, owner, caseStatus],
        function (err) {
            if (err) res.status(500).send(err);
            else res.send("Data Added Successfully");
        }
    );
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});