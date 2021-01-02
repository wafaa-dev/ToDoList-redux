import React from'react';
import Task from './Task';
import { useSelector } from "react-redux";

const TaskList = () => {
  const list = useSelector((state) => state.myTasks);
     
  return (
    <div>
    
      <div className="task-list-container">
        <h2> </h2>
      </div>
      {
        list.map(el=> <Task key={el.id}  el={el}/> )
            
      }
    </div>
  );
};


export default TaskList;

 