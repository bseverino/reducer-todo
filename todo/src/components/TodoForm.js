import React from 'react';
import { Form, Input, Button, ButtonGroup } from 'reactstrap';

function TodoForm(props) {
    return (
        <Form onSubmit={props.handleSubmit}>
            <Input
                type='text'
                name='newItemText'
                placeholder='New Todo Item'
                value={props.newItemText}
                onChange={props.handleChanges}
            />
            <ButtonGroup>
                <Button type='submit'>Add Item</Button>
                <Button onClick={props.clearCompleted}>Clear Completed</Button>
            </ButtonGroup>
        </Form>
    );
};

export default TodoForm;