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

  const onRemoveItemHandler = (todoId: string) => {
    setAddTodo((prevTodos)=> {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }
  return (
    <div>
      <NewTodo  onAddTodo={addTodoHandler}/>
      <Todos items={addTodo} onRemoveItem={onRemoveItemHandler}/>
    </div>
  );
}

export default App;
