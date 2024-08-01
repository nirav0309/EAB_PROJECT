import { call, put, takeEvery } from "redux-saga/effects";
import { MyAPI } from "../component/myapi";
import {
  getTableDataFailure,
  getTableDataSuccess,
} from "../reduxSlice/tableuserSlice";

function* fetchTableData() {
  try {
    const response = yield call(MyAPI.get, "/UserData");
    yield put(getTableDataSuccess(response.data));
  } catch (error) {
    yield put(getTableDataFailure(error.message));
  }
}

function* tableuserSaga() {
  yield takeEvery("tableusers/getTableData", fetchTableData);
}

export default tableuserSaga;
