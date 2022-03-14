import React, {useState} from 'react';
import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

function App() {
  const [addTodo, setAddTodo]= useState<Todo[]>([])
  const addTodoHandler = (todoText: string) => {
   const newTodo = new Todo (todoText)
   setAddTodo((prevTodos) => {
     return  prevTodos.concat(newTodo)
   })
  }
  return (
    <div>
      <NewTodo  onAddTodo={addTodoHandler}/>
      <Todos items={addTodo}/>
    </div>
  );
}

export default App;
