import { call, put, takeEvery } from "redux-saga/effects";
import { setSearchItem } from "../reduxSlice/searchSlice";

function* handleSearchItem() {
  try {
    yield put(setSearchItem());
  } catch (error) {
    console.error(error);
  }
}

function* searchSaga() {
  yield takeEvery("search/searchItemRequest", handleSearchItem);
}

export default searchSaga;