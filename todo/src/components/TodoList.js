import React from 'react';

import TodoItem from './TodoItem';

function TodoList(props) {
    return (
        <ul>
            {props.todoState.map(item => (
                <TodoItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

export default TodoList;