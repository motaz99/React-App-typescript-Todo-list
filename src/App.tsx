import React, {useState} from 'react';
import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

function App() {
  const [addTodo, setAddTodo]= useState('')
  const addTodoHandler = (todoText: string) => {
    setAddTodo(todoText)
  }
  const todos = [
    new Todo (addTodo),

  ];
  return (
    <div>
      <NewTodo  onAddTodo={addTodoHandler}/>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
