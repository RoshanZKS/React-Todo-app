import React from 'react'

function Todolist({todos, setTodos, editTodo ,setEditTodo}) {

    const handleDelete = ({id})=>{
        setTodos(todos.filter((todo)=> todo.id !== id))
    }

    const handleEdit= ({id})=>{
        const findTodo = todos.find((todo)=> todo.id === id)
        setEditTodo(findTodo)
    }

  return (
    <div>
        {todos.map((todo)=>(
            <li className='list-item'>
                <input 
                    type='text'
                    value={todo.title}
                    className='list'
                />
                <div> 
                   <input type='checkbox' className='button-complete task-button'/>
                   <button className='button-edit task-button' onClick={()=>handleEdit(todo)}>Edit</button>
                   <button className='button-delete task-button' onClick={()=>handleDelete(todo)}>Del</button>
                   
                </div>
            </li>
        ))}
    </div>
  )
}

export default Todolist