import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../action/actionsTypes";

const initialValue = [];

const todoReducer = (state = initialValue, action) => {
  if (action.type == ADD_TODO) {
    return [...state, action.payload];
  } else if (action.type == DELETE_TODO) {
    return state.filter((todo) => todo.id != action.payload);
  } else 
  if (action.type == UPDATE_TODO) {
    console.log(state);
    let index
    for (let i = 0; i < state.length; i++) {
      if (state[i].id == action.payload.id)  {
        index = i
      }
     }
     let arr = structuredClone(state)
     arr[index].title = action.payload.newTitle
     return arr;
  } else {
    return state;
  }
};

export default todoReducer;
