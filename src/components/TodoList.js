import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                const data = await response.json();
                const formattedTodos = data.map(todo => ({ text: todo.title, completed: todo.completed }));
                setTodos(formattedTodos);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };

        fetchTodos();
    }, []);

    const addTodo = () => {
        if (input.trim() !== '') {
            setTodos([...todos, { text: input, completed: false }]);
            setInput('');
        }
    };

    return (
        <div>
            <label htmlFor="todoInput">Enter Todo</label>
            <input
                id="todoInput"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem key={index} todo={todo} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
