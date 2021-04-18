import { combineReducers } from "redux";
import userReducer from "./reducer";
import store from "./store";

export const reducer = combineReducers({
  user: userReducer
});

export { store };
