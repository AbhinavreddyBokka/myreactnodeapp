// api.js
const API_URL = 'http://localhost:5000/api/tasks';

export const getTasks = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch tasks');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
};

export const addTask = async (task) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        });

        if (!response.ok) {
            throw new Error('Failed to add task');
        }
    } catch (error) {
        console.error('Error adding task:', error);
        throw error;
    }
};
