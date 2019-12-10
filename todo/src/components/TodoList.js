import React from 'react';
import { ListGroup } from 'reactstrap';

import TodoItem from './TodoItem';

function TodoList(props) {
    return (
        <ListGroup>
            {props.todo.map(item => (
                <TodoItem
                    {...props}
                    key={item.id}                    
                    item={item}                    
                />
            ))}
        </ListGroup>
    );
};

export default TodoList;