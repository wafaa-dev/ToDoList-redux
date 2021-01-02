import { createStore } from "redux";
import  TodoReducer from "./Reducers/TodoReducer";

export const store = createStore(
  TodoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);