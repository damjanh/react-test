import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = (
    { todo },
) => (
    <div className="todo-item">
        <input type="checkbox" checked={todo.completed} readOnly />
        <p>
            {todo.text}
        </p>
    </div>
);

TodoItem.propTypes = {
    todo: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TodoItem;
