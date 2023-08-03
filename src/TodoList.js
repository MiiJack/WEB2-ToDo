import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, modifyTodo, deleteTodo }) {
    return (
        <div className="todo-list">
            {todos.map((todo, index) => (
                <TodoItem key={index} index={index} todo={todo} modifyTodo={modifyTodo} deleteTodo={deleteTodo} />
            ))}
        </div>
    );
}

export default TodoList;
