// import logo from './logo.svg';
import React,{useState, useEffect} from 'react';
import './App.css';
import Todo from './components/todo';
import Todolist from './components/todolist';

function App() {

  // const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10')
      .then(response => response.json())
      .then(json => setTodos(json))

  }, [])
  

  return (
    <div className="container">
      <div className='app-wrapper'>
        <div>
          <Todo/>
        </div>
        <div>
          <Todolist todos= {todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
