import React, {useState} from 'react'

function TodoForm() {
const[input,setInput]=useState('')
    return (
            <form>
                <input type="text" 
                placeholder="Add todo" 
                value={input}
                name="text" 
                className="todo-input"/>
                <button className="todo-button">Add todo</button>
            </form>        
    )
}

export default TodoForm
