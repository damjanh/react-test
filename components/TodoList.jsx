import React from 'react';
import TodoItem from './TodoItem';
import todosData from '../data/todosData';

const TodoList = () => todosData.map((todo) => <TodoItem todo={todo} key={todo.id} />);

export default TodoList;
