import {ADD,EDIT,REMOVE,DONE} from "../Constants/ActionsTypes";

const initialState={
    myTasks:[
        {id:0,isComplete:false,text:"router checkpoint"},
        {id:1, isComplete:true, text:"redux checkpoint "},
        {id:2, isComplete:false, text:"coffee with friends "}
],

}

const TodoReducer=(state=initialState, action) =>{
switch (action.type){
    case ADD :
        return {
            ...state,myTasks:[...state.myTasks,action.payload]};
    
    case EDIT :
        return {
              ...state,myTasks:state.myTasks.map(el=>  el.id===action.payload.index? {...el,text:action.payload.editedText} : el )
         };
    
    case REMOVE :
        return {
            ...state,myTasks:state.myTasks.filter(el=> el.id!==action.payload)
        };
        case DONE:
            return{
          ...state,myTasks:state.myTasks.map(el => el.id===action.payload? {...el, isComplete:!el.isComplete}:el  )
          

            }
    
    default :return state 
   
}
}
export default TodoReducer