import { UNITS } from "../constants";

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case UNITS.LOAD_FAIL:
      return action.error;
    case UNITS.LOAD:
    case UNITS.LOAD_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default errorReducer;
