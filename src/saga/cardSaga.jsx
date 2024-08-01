import { all, call, put, takeEvery } from "redux-saga/effects";
import { MyAPI } from "../component/myapi";
import {
  deleteCardFailure,
  deleteCardSuccess,
  getCardDataFailure,
  getCardDataSuccess,
  updateCardFailure,
  updateCardSuccess,
} from "../reduxSlice/cardSlice";

function* fetchCardData() {
  try {
    const response = yield call(MyAPI.get, "/CardData");
    yield put(getCardDataSuccess(response.data));
  } catch (error) {
    yield put(getCardDataFailure(error.message));
  }
}

function* deletedCard(action) {
  const itemId = action.payload;
  try {
    const cardDelete = yield call(MyAPI.delete, `/CardData/${itemId}`);
    if (cardDelete.status === 200) {
      yield put(deleteCardSuccess(itemId));
    } else {
      console.error("Error deleting item:", cardDelete);
    }
  } catch (error) {
    yield put(deleteCardFailure(error.message));
  }
}

function* updatedCard(action) {
  try {
    const response = yield call(MyAPI.patch, `/CardData/${action.payload.id}`, {
      currentLevel: action.payload.nextLevel,
    });
   yield put(updateCardSuccess(response.data))
  } catch (error) {
    yield put(updateCardFailure(error.message));
  }
 
}


function* cardSaga() {
  yield takeEvery("cards/getCardData", fetchCardData);
  yield takeEvery("cards/deleteCard", deletedCard);
  yield takeEvery("cards/updateCard", updatedCard);
}

export default cardSaga;


