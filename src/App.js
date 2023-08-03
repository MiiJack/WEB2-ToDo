import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const modifyTodo = (index, todo) => {
        const newTodos = [...todos];
        newTodos[index] = todo;
        setTodos(newTodos);
    };

    const deleteTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="app">
            <h1>Todo List</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} modifyTodo={modifyTodo} deleteTodo={deleteTodo} />
        </div>
    );
}

export default App;
