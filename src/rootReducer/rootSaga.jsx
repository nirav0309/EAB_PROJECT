import { all } from "redux-saga/effects";
import cardSaga from "../saga/cardSaga";
import searchSaga from "../saga/searchSaga";
import userSaga from "../saga/userSagas";
import tableuserSaga from "../saga/tableuserSaga";

function* rootSaga() {
  yield all([cardSaga(), searchSaga(), userSaga(), tableuserSaga()]);
}

export default rootSaga;
