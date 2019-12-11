import React from 'react';
import { Form, FormGroup, Input, Button, ButtonGroup } from 'reactstrap';

function TodoForm(props) {
    return (
        <Form className='todo-form' onSubmit={props.handleSubmit}>
            <FormGroup>
                <Input
                    type='text'
                    name='newItemText'
                    placeholder='New Todo Item'
                    value={props.newItemText}
                    onChange={props.handleChanges}
                />
                </FormGroup>
                <FormGroup>
                <ButtonGroup>
                    <Button color='success' type='submit'>Add Item</Button>
                    <Button color='danger' onClick={props.clearCompleted}>Clear Completed</Button>
                </ButtonGroup>
            </FormGroup>
        </Form>
    );
};

export default TodoForm;