import React from 'react';
import moment from 'moment';
import { ListGroupItem, Badge } from 'reactstrap';

function TodoItem(props) {
    return (
        <ListGroupItem            
            className='list-item'
            color={props.item.completed ? 'success' : 'danger'}
            onClick={() => props.toggleComplete(props.item.id)}
        >
            {props.item.item} {props.item.completed? <Badge color='danger' pill>✔</Badge> : null} {props.item.completed? `Completed ${props.item.time}` : null}
        </ListGroupItem>
    );
};

export default TodoItem;