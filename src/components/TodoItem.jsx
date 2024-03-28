import React, { useState } from 'react';
import { ListGroup, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function TodoItem({ todo, onToggle, onDelete }) {
    const handleCheckboxChange = () => {
        onToggle(todo.id);
    };

    const handleDeleteClick = () => {
        onDelete(todo.id);
    };

    return (
        <ListGroup.Item className={`d-flex align-items-center justify-content-between todo-item ${todo.completed ? 'completed' : ''}`}>            <Form.Check
                type="checkbox"
                id={`checkbox-${todo.id}`}
                label={todo.title}
                checked={todo.completed}
                onChange={handleCheckboxChange}
            />
            <small>{todo.description}</small>
            <FontAwesomeIcon
                icon={faTrash}
                className="delete-icon"
                onClick={handleDeleteClick}
            />
        </ListGroup.Item>
    );
}

export default TodoItem;
