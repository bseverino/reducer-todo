import React, { useState, useReducer } from 'react';
import { Container, Row, Col } from 'reactstrap';

import { reducer, initialState } from './reducers/todoReducer';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newItemText, setNewItemText] = useState('');
  console.log(state);

  const handleChanges = e => {
    setNewItemText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_ITEM', payload: newItemText })
    setNewItemText('');
  };

  const toggleComplete = id => {
    console.log(id);
    dispatch({ type: 'TOGGLE_COMPLETE', payload: id });
  };

  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED' });
  }

  return (
    <Container className='App' fluid={true}>
      <Row>
        <Col>
          <h1>Holiday Todo List</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <TodoList
            todo={state.todo}
            toggleComplete={toggleComplete}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TodoForm
            newItemText={newItemText}
            handleChanges={handleChanges}
            handleSubmit={handleSubmit}
            clearCompleted={clearCompleted}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
