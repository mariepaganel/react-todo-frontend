// TodoForm.jsx

import React, { useState } from 'react';

function TodoForm({ onAddTodo }) {
    const [newTodo, setNewTodo] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newTodo.trim() || !newDescription.trim()) return;
        onAddTodo({
            title: newTodo,
            description: newDescription,
            completed: false
        });
        setNewTodo('');
        setNewDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Enter new todo"
            />
            <input
                type="text"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder="Enter description"
            />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default TodoForm;
