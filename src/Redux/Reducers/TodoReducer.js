import {ADD,EDIT,REMOVE,DONE, FILTER_TASK} from "../Constants/ActionsTypes";

const initialState={
    myTasks:[],
    filtered: []
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
    case FILTER_TASK:
        switch(action.payload){
            case "All":
                return {
                    ...state,
                    filtered:[]
                }
            case "Complete":
                return {
                    ...state,
                    filtered: state.myTasks.filter((task)=> {return task.isComplete === true})
                }
            case "Uncomplete":
                return {
                    ...state,
                    filtered: state.myTasks.filter((task)=> {return task.isComplete === false})
                }
            default:
                return state;
        }
    
    default :return state 
   
}
}
export default TodoReducer