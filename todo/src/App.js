import React, { useReducer } from 'react';

import { reducer, initialState } from './reducers/todoReducer';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todoState, dispatch] = useReducer(reducer, initialState);
  console.log(todoState);

  return (
    <div className='App'>
      <TodoList todoState={todoState} />
      <TodoForm />
    </div>
  );
}

export default App;
