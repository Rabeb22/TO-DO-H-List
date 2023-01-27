import React from 'react';

const TaskCard = ({el,comp,del}) => {
  return (
    <div className="task">
      <p id={el.isdone?"comp":"unc"}>{el.action}</p>
      <button onClick={()=>comp(el.id)}>{el.isdone?"Undo":"Complete"}</button>
      <button onClick={()=>del(el.id)}>Delete</button>
    </div>
  );
}

export default TaskCard;
