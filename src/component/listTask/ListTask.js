import React from 'react';
import TaskCard from '../taskCard/TaskCard';

const ListTask = ({tab,comp,del}) => {
  return (
    <div>
      {tab.map(el=><TaskCard key={tab.id} el={el} comp={comp} del={del} />)}
    </div>
  );
}

export default ListTask;
