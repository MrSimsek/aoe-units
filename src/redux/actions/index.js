import { UNITS } from "../constants";

const loadUnits = () => ({
  type: UNITS.LOAD
});

const setUnits = units => ({
  type: UNITS.LOAD_SUCCESS,
  units
});

const setError = error => ({
  type: UNITS.LOAD_FAIL,
  error
});

export { loadUnits, setUnits, setError };
