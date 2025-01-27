const express = require('express');
const mysql = require('./database');
const cors = require('cors');
const app = express();


// Enable CORS for frontend to communicate with the backend
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// API to get tasks
app.get('/api/tasks', (req, res) => {
    mysql.query('SELECT * FROM tasks', (err, results) => {
        if (err) {
            console.error('Error fetching tasks:', err);
            return res.status(500).send('Error fetching tasks');
        }
        res.json(results); // Send the fetched tasks as a JSON response
    });
});

// API to add a new task
app.post('/api/tasks', (req, res) => {
    const { title } = req.body;
    mysql.query('INSERT INTO tasks (title) VALUES (?)', [title], (err) => {
        if (err) {
            console.error('Error adding task:', err);
            return res.status(500).send('Error adding task');
        }
        res.status(201).send('Task added successfully');
    });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
