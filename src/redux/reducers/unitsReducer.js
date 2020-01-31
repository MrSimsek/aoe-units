import { UNITS } from "../constants";

const unitsReducer = (state = [], action) => {
  if (action.type === UNITS.LOAD_SUCCESS) {
    return [...state, ...action.units];
  }
  return state;
};

export default unitsReducer;
