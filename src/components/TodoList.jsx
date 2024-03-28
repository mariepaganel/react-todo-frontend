// TodoList.jsx

import React from 'react';
import TodoItem from './TodoItem';
import '../styles/TodoList.css'
import ListGroup from 'react-bootstrap/ListGroup';

function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
    return (
        <ListGroup>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggleTodo}
                    onDelete={onDeleteTodo}
                />
            ))}
        </ListGroup>
    );
}

export default TodoList;
