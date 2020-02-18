import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = (
    { todo, handleChange },
) => (
    <div className="todo-item">
        <input type="checkbox" checked={todo.completed} onChange={() => handleChange(todo.id)} />
        <p>
            {todo.text}
        </p>
    </div>
);

TodoItem.propTypes = {
    todo: PropTypes.objectOf(PropTypes.any).isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default TodoItem;
