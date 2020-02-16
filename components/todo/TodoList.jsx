import React from 'react';
import TodoItem from './TodoItem';
import todosData from '../../data/todosData';

const TodoList = () => {
    const todoItems = todosData.map((todo) => <TodoItem todo={todo} key={todo.id} />);
    return (
        <div className="todo-list">
            <h4>TODO:</h4>
            {todoItems}
        </div>
    );
};

export default TodoList;
