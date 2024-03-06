import './App.css';
import {useEffect, useState} from 'react'
import {TodoProvider} from './contexts/todoContext'
import Form from "./components/Form"
import Table from "./components/Table"
function App() {
  
  const [todos,setTodos]=useState([])

  const addTodo=(todo)=>{
    setTodos((prev)=>[...prev,{id:Date.now(),...todo}])
  }

  const deleteTodo=(id)=>{
   setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
  }
   
  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id ? todo:prevTodo)))
  }
  
  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id ? {...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }

  useEffect(()=>{
   const todos=JSON.parse(localStorage.getItem("todos"))

   if(todos && todos.length>0){
    setTodos(todos)
   }
  },[])

  useEffect(()=>{
   localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
   <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleComplete}}>
     <div className="App">
      <div>
        <Form />
      </div>
      <div>
        {
          todos.map((todo)=>(
            <div key={todo.id}>
             <Table todo={todo} />
            </div>
          ))}
      </div>
    </div>
   </TodoProvider>
  );
}

export default App;
