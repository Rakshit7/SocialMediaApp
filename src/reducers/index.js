import { combineReducers } from "redux";
import { CounterReducer } from "../reducers/CounterReducer";
import { ErrorReducer } from "../reducers/ErrorReducer";

export default combineReducers({
  auth: CounterReducer,
  error: ErrorReducer,
});
