import React from 'react';
import { ListGroupItem } from 'reactstrap';

function TodoItem(props) {
    return (
        <ListGroupItem            
            className={`list-item ${props.item.completed ? 'completed' : ''}`}
            color={props.item.completed ? 'success' : 'danger'}
            onClick={() => props.toggleComplete(props.item.id)}
        >
            {props.item.item}
        </ListGroupItem>
    );
};

export default TodoItem;