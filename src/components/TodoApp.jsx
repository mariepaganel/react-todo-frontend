// TodoApp.jsx

import React, { useState, useEffect } from 'react';
import { fetchTodos, addTodo, toggleTodo, deleteTodo } from '../services/api';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(null); // Declare error state variable

    useEffect(() => {
        fetchTodos()
            .then(data => setTodos(data))
            .catch(error => setError(error));
    }, []);

    const handleAddTodo = async (newTodo) => {
        try {
            const response = await addTodo(newTodo);
            setTodos([...todos, response]);
        } catch (error) {
            setError(error);
        }
    };

    const handleToggleTodo = async (id) => {
        try {
            const todoToToggle = todos.find(todo => todo.id === id);
            if (!todoToToggle) {
                throw new Error(`Todo with id ${id} not found.`);
            }

            const toggledTodo = { ...todoToToggle, completed: !todoToToggle.completed };
            await toggleTodo(toggledTodo); // Pass the entire todo object

            const updatedTodos = todos.map(todo =>
                todo.id === id ? toggledTodo : todo
            );
            setTodos(updatedTodos);
        } catch (error) {
            setError(error);
        }
    };

    const handleDeleteTodo = async (id) => {
        try {
            await deleteTodo(id);
            setTodos(todos.filter(todo => todo.id !== id));
        } catch (error) {
            setError(error);
        }
    };

    return (
        <div>
            <h1>To do App</h1>
            <TodoForm onAddTodo={handleAddTodo} />
            <TodoList
                todos={todos}
                onToggleTodo={handleToggleTodo}
                onDeleteTodo={handleDeleteTodo}
            />
            {error && <div>Error: {error.message}</div>} {/* Display error message if error state is not null */}
        </div>
    );
}

export default TodoApp;
