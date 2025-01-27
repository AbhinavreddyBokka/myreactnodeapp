// App.js
import React, { useState, useEffect } from 'react';
import { getTasks, addTask } from './api';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const tasksFromServer = await getTasks();
                setTasks(tasksFromServer);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks();
    }, []);

    const handleAddTask = async () => {
        if (!title) return; // Prevent adding empty tasks

        try {
            await addTask({ title });
            setTitle('');
            const tasksFromServer = await getTasks(); // Refresh tasks
            setTasks(tasksFromServer);
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    return (
        <div>
            <h1>Todo App</h1>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
