import React, { useState } from 'react';

const TaskCard = ({ajout}) => {
    const [text, setText] = useState("")
    const handlechange=(e)=>{
      setText(e.target.value)
      // 
      // setText("");
    }
    const handleSubmit=(e)=>{
      e.preventDefault()
      text.trim()===""?alert("Veuillez saisir une chaine non vide"):
      ajout(text);
      setText("")
    }
  return (
    <div className="add">
    <h1>To Do List</h1>
    <form onSubmit={handleSubmit} action="">
    <input type="text" value={text} onChange={handlechange}/>
    <button type="submit" >Add</button>
    </form>
</div>
  );
}

export default TaskCard;
