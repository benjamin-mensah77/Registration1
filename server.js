/*const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Initialize SQLite database
const db = new sqlite3.Database('students.db'); // Persistent database file

// Create students table if it doesn't exist
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        class TEXT NOT NULL,
        location TEXT NOT NULL,
        birthdate TEXT NOT NULL,
        region TEXT NOT NULL
    )`);
});

// Endpoint to save student data
app.post('/api/students', (req, res) => {
    const { name, class: studentClass, location, birthdate, region } = req.body;
    
    const stmt = db.prepare(`INSERT INTO students (name, class, location, birthdate, region) VALUES (?, ?, ?, ?, ?)`);
    stmt.run(name, studentClass, location, birthdate, region, function(err) {
        if (err) {
            console.error('Database insert error:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ id: this.lastID }); // Return the new record's ID
    });
    stmt.finalize();
});



// Endpoint to retrieve all student records



app.get('/api/students', (req, res) => {
    db.all("SELECT * FROM students", [], (err, rows) => {
        if (err) {
            console.error('Database query error:', err.message);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(200).json(rows);
    });
});






// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
*/



const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Initialize SQLite database
const db = new sqlite3.Database('students.db'); // Persistent database file

// Create students table if it doesn't exist
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        class TEXT NOT NULL,
        location TEXT NOT NULL,
        birthdate TEXT NOT NULL,
        region TEXT NOT NULL
    )`);
});






// Endpoint to save student data
app.post('/api/students', (req, res) => {
    const { name, class: studentClass, location, birthdate, region } = req.body;
    
    const stmt = db.prepare(`INSERT INTO students (name, class, location, birthdate, region) VALUES (?, ?, ?, ?, ?)`);
    stmt.run(name, studentClass, location, birthdate, region, function(err) {
        if (err) {
            console.error('Database insert error:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ id: this.lastID }); // Return the new record's ID
    });
    stmt.finalize();
});














// Endpoint to retrieve all student records
app.get('/api/students', (req, res) => {
    db.all("SELECT * FROM students", [], (err, rows) => {
        if (err) {
            console.error('Database query error:', err.message);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(200).json(rows);
    });
});

// Simple login endpoint
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // Hardcoded credentials for demonstration (replace with your own logic)
    if (username === 'benjamin' && password === 'home4sure') {
        // Successful login
        res.status(200).json({ message: 'Login successful!' });
    } else {
        // Failed login
        res.status(401).json({ error: 'Invalid username or password' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
