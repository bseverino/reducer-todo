import React from 'react';

function TodoItem(props) {
    return (
        <li>{props.item.item}</li>
    );
};

export default TodoItem;