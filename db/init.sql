-- init.sql

-- Create the user (if it doesn't exist already) with mysql_native_password authentication
CREATE USER IF NOT EXISTS 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'Abhi@1645';

-- Grant necessary privileges
GRANT ALL PRIVILEGES ON example_db.* TO 'root'@'%';

-- Update the user to use mysql_native_password explicitly (if not already set)
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'Abhi@1645';

-- Flush privileges to apply the changes
FLUSH PRIVILEGES;

-- Create the database (if it doesn't exist already)
CREATE DATABASE IF NOT EXISTS example_db;

-- Switch to the newly created database
USE example_db;

-- Create a tasks table
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL
);

-- Insert sample data into the tasks table
INSERT INTO tasks (title) VALUES ('Task 1'), ('Task 2'), ('Task 3');
