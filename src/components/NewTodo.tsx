import React from 'react'
import {useRef} from 'react'

const NewTodo = () => {
    const todoTextInputRef = useRef<HTMLInputElement>(null)
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()

        const enteredText = todoTextInputRef.current!.value;

        if(enteredText.trim().length === 0){
            // throw an error
            return;
        }
    }
  return (
    <form onSubmit={submitHandler}>
        <label htmlFor='text'>Write Your Task</label>
        <input type='text' id='text' ref={todoTextInputRef} />
        <button>Add Task</button>
    </form>
  )
}

export default NewTodo