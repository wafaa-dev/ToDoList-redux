import React from 'react';
import EditTask from "./EditTask";
import { useDispatch } from "react-redux";
import { remove ,done } from "../Redux/Actions/TodoActions";
import PropTypes from 'prop-types'

const Task =({el,})=> {
    const dispatch = useDispatch();
    const deletee = () => {
    dispatch(remove(el.id));
  };
  const complete = () => {
    
    dispatch(done(el.id));
  };
  return (
    <div className="task-line" >
          <input type="checkbox" className="check" onClick={complete} ></input>
          <div className="task" >
             <p style={{
      textDecoration: done ? 'none':'line-through'
    }} >{el.text} </p>
              <EditTask el={el} />

          </div>
         
          <div  className="remove" >
             
              <button onClick={deletee} className="remove-btn"> ✘ </button>

          </div>
          
    </div>

    )
}
Task.propTypes = {
  onClick: PropTypes.func.isRequired,
  isComplete: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
export default Task;