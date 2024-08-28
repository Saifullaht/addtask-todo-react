 import TodoInput from './components/todoinput'
 import './App.css'
 import TodoList from './components/TodoList'
import { useState } from 'react'
 
 function App() {

  const [todo , settodo] = useState("")
  const [todos , settodos] = useState([
    {
       todo : "",
      id : Date.now(),
      completed : false,

    }

  ])
  const handleaddtodo = () =>{
    const todoArr = [...todos,{
      todo,
      id : Date.now(),
      completed : false,

    }
    ];
    settodos([...todoArr]);
    settodo("")
  }
   return (
    <> 
       <h1 className='heading'>ToDoo</h1>
     <div className='main'>
    <TodoInput value = {todo} onChange={(e)=> settodo(e.target.value)} 
     onClick={handleaddtodo} />

    <TodoList todos={todos}/>
    </div>
 </>
  )
}
export default App
