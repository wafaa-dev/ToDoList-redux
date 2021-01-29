import React from 'react';
import EditTask from "./EditTask";
import { useDispatch } from "react-redux";
import { remove ,done } from "../Redux/Actions/TodoActions";

const Task =({el})=> {
    const dispatch = useDispatch();
    const deletee = () => {
    dispatch(remove(el.id));
  };

  return (
    <div className="task-line" >
          <input type="checkbox"  className="check" onClick={(e) => {
            dispatch(done(el.id));
            }} ></input>
          <div className="task" >
             <p style={{
      textDecoration: !el.isComplete ? 'none':'line-through'
    }} 
    >{el.text} </p>
              <EditTask el={el} />

          </div>
         
          <div  className="remove" >
             
              <button onClick={deletee} className="remove-btn"> ✘ </button>

          </div>
          
    </div>

    )
}

export default Task;