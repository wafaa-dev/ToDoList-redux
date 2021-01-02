import React ,{useState} from'react';
import {useDispatch} from 'react-redux';
import {add} from '../Redux/Actions/TodoActions';

const Addnew=()=>{
    const [text, setText] =useState("");
    const dispatch=useDispatch();

    const addToDo =()=> {
        dispatch(add ({id:Math.random(), isComplete : false, text:text }));
        setText("");
    };
    return (
    <div className="Input">
        <div className="add"> 
          <h1>MY TO-DO APPLICATION</h1>
        <h4>add new task</h4>
     
         <input
          type="text"
          id="newInput"
          placeholder="Enter New Task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
         <br />
          <button className="add-Btn" onClick={addToDo}>
          ADD
        </button>
        </div>
       </div>
)
};


export default Addnew;