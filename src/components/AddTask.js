import React ,{useState} from'react';
import {useDispatch} from 'react-redux';
import {add, filter} from '../Redux/Actions/TodoActions';
import {v4 as uuid} from "uuid";

const Addnew=()=>{
    const [text, setText] =useState("");
    const dispatch=useDispatch();

    const addToDo =()=> {
        dispatch(add ({id: uuid(), isComplete : false, text:text }));
        setText("");
    };
    return (
    <div className="Input">
        <div className="add"> 
          <h1>MY TO-DO APPLICATION</h1>
        <h4>add new task</h4>
        <select onChange={(e)=> {
          dispatch(filter(e.target.value));
        }}>
          <option value="All">All</option>
          <option value="Complete">Complete</option>
          <option value="Uncomplete">Uncomplete</option>
        </select>
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