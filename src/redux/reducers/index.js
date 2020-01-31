import { combineReducers } from "redux";

import unitsReducer from "./unitsReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  units: unitsReducer,
  error: errorReducer
});

export default rootReducer;
