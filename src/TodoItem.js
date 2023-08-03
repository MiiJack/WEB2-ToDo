import React, { useState } from 'react';

function TodoItem({ todo, index, modifyTodo, deleteTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [modifiedText, setModifiedText] = useState(todo.text);

    const handleModify = () => {
        if (isEditing) {
            modifyTodo(index, { ...todo, text: modifiedText });
        }
        setIsEditing(!isEditing);
    };

    return (
        <div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
            <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => modifyTodo(index, { ...todo, isCompleted: !todo.isCompleted })}
            />
            <span className={`todo-text ${todo.isCompleted ? "completed-text" : ""}`}>
        {isEditing ? (
            <input
                type="text"
                value={modifiedText}
                onChange={e => setModifiedText(e.target.value)}
            />
        ) : (
            todo.text
        )}
      </span>

            <div>
                <button onClick={handleModify}>{isEditing ? "Save" : "Modify"}</button>
                <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>
        </div>
    );
}

export default TodoItem;
