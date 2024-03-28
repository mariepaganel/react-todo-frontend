// TodoList.jsx

import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggleTodo}
                    onDelete={onDeleteTodo}
                />
            ))}
        </ul>
    );
}

export default TodoList;
