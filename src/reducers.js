import { combineReducers } from "redux";

const todos = (state = [], action) => {
  if(action.type === "ADD_TODO"){
      return [...state, action.payload];
  }
  if(action.type === "CHANGE_DONE"){
    return state.map(todo => todo.id === action.payload ? { ...todo, done: !todo.done } : todo);
  }
  return state;
}

export default combineReducers({
    todos
});
