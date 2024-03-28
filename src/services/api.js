import axios from 'axios';

const BASE_URL = 'http://localhost:1323';

export const fetchTodos = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/todos`);
        return response.data;
    } catch (error) {
        handleAxiosError(error, 'fetching todos');
    }
};

export const addTodo = async (newTodo) => {
    try {
        const response = await axios.post(`${BASE_URL}/todo`, {
            title: newTodo.title,
            description: newTodo.description, // Include description in the request body
            completed: false
        });
        return response.data;
    } catch (error) {
        handleAxiosError(error, 'adding todo');
    }
};


export const toggleTodo = async (todo) => {
    try {
        const response = await axios.put(`${BASE_URL}/todo/${todo.id}`, todo); // Send the entire todo object
        return response.data;
    } catch (error) {
        handleAxiosError(error, 'toggling todo');
    }
};


export const deleteTodo = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/todo/${id}`);
    } catch (error) {
        handleAxiosError(error, 'deleting todo');
    }
};

// Handle Axios errors
const handleAxiosError = (error, operation) => {
    console.error(`Error ${operation}:`, error);
    throw error; // Re-throw the error to propagate it up to the caller
};
