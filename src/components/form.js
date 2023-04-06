import React from 'react'

function Form() {
  return (
    <form>
        <input 
            type='text'
            placeholder='Enter todo'
            className='task-input'
            // value={input}
            // required
            // onChange={}
        />
        <button className='button-add' type='submit'>
            Add
        </button>

    </form>
  )
}

export default Form