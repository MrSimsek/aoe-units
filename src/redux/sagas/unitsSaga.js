import { put, call, takeEvery } from "redux-saga/effects";

import { setUnits, setError } from "../actions";
import { UNITS } from "../constants";
import { fetchUnits } from "../../api";

export function* handleUnitsLoad() {
  try {
    const units = yield call(fetchUnits);
    yield put(setUnits(units));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* watchUnitsLoad() {
  yield takeEvery(UNITS.LOAD, handleUnitsLoad);
}
