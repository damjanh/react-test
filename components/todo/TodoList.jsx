import React from 'react';
import TodoItem from './TodoItem';
import todosData from '../../data/todosData';

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todosData,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState((prevState) => (
            prevState.todos.map((todo) => {
                if (todo.id === id) {
                    const modifiedTodo = todo;
                    modifiedTodo.completed = !todo.completed;
                    return modifiedTodo;
                }
                return todo;
            })
        ));
    }

    render() {
        const { todos } = this.state;
        const todoItems = todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} handleChange={this.handleChange} />
        ));
        return (
            <div className="todo-list">
                <h4>TODO:</h4>
                {todoItems}
            </div>
        );
    }
}

export default TodoList;
