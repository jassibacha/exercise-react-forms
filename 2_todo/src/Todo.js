import React from 'react';
import './Todo.css';

const Todo = ({ task, id, deleteTodo }) => {
    return (
        <div className="Todo" key={id}>
            {task}
            <button className="delete" onClick={deleteTodo}>
                X
            </button>
        </div>
    );
};

export default Todo;
