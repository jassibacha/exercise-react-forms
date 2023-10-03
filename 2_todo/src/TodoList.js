import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import { v4 as uuid } from 'uuid';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const renderTodos = () => {
        return (
            <div>
                {todos.map((todo) => (
                    <Todo
                        task={todo.task}
                        id={todo.id}
                        key={todo.id}
                        deleteTodo={() => deleteTodo(todo.id)}
                    />
                ))}
            </div>
        );
    };

    const deleteTodo = (todoId) => {
        // Run setBoxes again
        setTodos((todos) =>
            // Filter the boxes array from state
            todos.filter((todo) => {
                // If the ID matches, remove it!
                return todo.id !== todoId;
            })
        );
    };

    /** Add new item object to cart. */
    const addTodo = (todo) => {
        let newTodo = { ...todo, id: uuid() };
        setTodos((todos) => [...todos, newTodo]);
    };

    return (
        <div className="Todos">
            <NewTodoForm addTodo={addTodo} />
            {renderTodos()}
        </div>
    );
};

export default TodoList;
