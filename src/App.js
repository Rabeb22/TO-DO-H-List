
import React, { useState } from 'react'
import ListTask from './component/listTask/ListTask'
import AddTask from './component/addTask/AddTask'
import './App.css'

const TodoList=[{id:Math.random(), action:"learn state", isdone:false},
{id:Math.random(), action:"HTML JSX", isdone:false},
{id:Math.random(), action:"React Bootstrap", isdone:false}]

 function App () {
 
const [todos,settodos] = useState(TodoList)

const handledelete=(taskId)=>{
  settodos(todos.filter(el=>el.id!==taskId))
}

const handleComplete=(taskId)=>{
 settodos(todos.map(el =>(el.id === taskId?{...el,isdone:!el.isdone}:el))) 

}

const handleAdd=(input)=>{
  const newtask={id:Math.random(),action:input,isdone:false}
  settodos([...todos,newtask])
}
 
  return (
    <div className="app">
    <AddTask ajout={handleAdd}/>
      <ListTask tab={todos} del={handledelete} comp={handleComplete} />
    </div>
  )
}
export default App

