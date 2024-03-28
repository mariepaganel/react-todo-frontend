import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <li>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id, !todo.completed)} // Pass todo id and new completion status
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.title}
      </span>
            <p>{todo.description}</p> {/* Display the description */}
            <button onClick={() => onDelete(todo.id)}>Delete</button> {/* Pass todo id */}
        </li>
    );
}

export default TodoItem;
