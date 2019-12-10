import React from 'react';
import { ListGroupItem, Badge } from 'reactstrap';

function TodoItem(props) {
    return (
        <ListGroupItem            
            className='list-item'
            color={props.item.completed ? 'success' : 'danger'}
            onClick={() => props.toggleComplete(props.item.id)}
        >
            {props.item.item} {props.item.completed? <Badge pill>✔</Badge> : null}
        </ListGroupItem>
    );
};

export default TodoItem;