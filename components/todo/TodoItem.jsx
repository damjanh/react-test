import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = (
    { todo, handleChange },
) => {
    const completedStyle = {
        fontStyle: 'italic',
        color: '#cdcdcd',
        textDecoration: 'line-through',

    };
    return (
        <div className="todo-item">
            <input type="checkbox" checked={todo.completed} onChange={() => handleChange(todo.id)} />
            <p style={todo.completed ? completedStyle : null}>
                {todo.text}
            </p>
        </div>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.objectOf(PropTypes.any).isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default TodoItem;
