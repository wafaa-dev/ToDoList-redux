
import {ADD,EDIT,REMOVE ,DONE} from "../Constants/ActionsTypes";

export const add =(newTask)=>{
    return {
        type:ADD,
        payload: newTask,
    } ;
}

export const edit =(p)=>{
    return {
        type:EDIT,
        //  p={index:  , editedText: },
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
        tyoe:DONE,
        payload:id,
        
    }
}