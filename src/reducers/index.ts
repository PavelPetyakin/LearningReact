import { combineReducers } from "redux";
import { exportMainReducer } from "./main/reducer";

const rootReducer = combineReducers({
  main: exportMainReducer
});

export { rootReducer };