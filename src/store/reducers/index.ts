import { combineReducers } from "redux";
//Reducers
import appReducer from "./app.reducer";

//
const combinedReducers = combineReducers({
  appReducer,
});
export default combinedReducers;
