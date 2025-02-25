const mysql = require('mysql2');

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Abhi@1645',  // Replace with your MySQL password
//     database: 'example_db', // Replace with your database name
// });

// Database configuration
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Establish connection
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL for : ', err);
        return;
    }
    console.log('Connected to MySQL');
});

module.exports = db;
