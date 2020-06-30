import setup from "./setup";
import bottomTabNavigation from "./bottomTabNavigation";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  setup,
  bottomTabNavigation,
});

export default rootReducer;
