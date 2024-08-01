import { call, put, takeEvery } from "redux-saga/effects";
import { MyAPI } from "../component/myapi";
import {
  getUserDataFailure,
  getUserDataSuccess,
} from "../reduxSlice/userSlice";

function* fetchUserData() {
  try {
    const response = yield call(MyAPI.get, "/UserData");
    yield put(getUserDataSuccess(response.data));
  } catch (error) {
    yield put(getUserDataFailure(error.message));
  }
}

function* userSaga() {
  yield takeEvery("users/getUserData", fetchUserData);
}

export default userSaga;
