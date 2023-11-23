import { ADD_TODO, DELETE_TODO , UPDATE_TODO } from "./actionsTypes";


export const add_todo = (newTodo) => {
    return {
        type : ADD_TODO ,
        payload : newTodo
    }
}
export const delete_todo = (todo_id) => {
    return {
        type : DELETE_TODO ,
        payload : todo_id
    }
}
export const update_todo = (todo_id,updateTodo) => {
    return {
        type : UPDATE_TODO ,
        payload : {
            id : todo_id,
            newTitle : updateTodo
        }
    }
}