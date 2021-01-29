
import {ADD,EDIT,REMOVE ,DONE, FILTER_TASK} from "../Constants/ActionsTypes";

export const add =(newTask)=>{
    return {
        type:ADD,
        payload: newTask,
    } ;
}

export const edit =(p)=>{
    return {
        type:EDIT,
        payload:p ,
    }
}

export const remove =(id)=>{
    return {
        type:REMOVE,
        payload: id,
    }
}
export const done =(id)=>{
    return{
        type:DONE,
        payload:id,
        
    }
}

export const filter = (status) => {
return {
    type: FILTER_TASK,
    payload: status
}
}