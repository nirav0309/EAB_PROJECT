import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userSlice from "../reduxSlice/userSlice";
import searchSlice from "../reduxSlice/searchSlice";
import cardSlice from "../reduxSlice/cardSlice";
import rootSaga from "../rootReducer/rootSaga";
import tableuserSlice from "../reduxSlice/tableuserSlice";

const sagaMiddleware = createSagaMiddleware(); //Creates a Redux middleware instance and connects the Sagas to the Redux Store.
 
const store = configureStore({
  reducer: {
    users: userSlice,
    cards: cardSlice,
    search: searchSlice,
    tableUser: tableuserSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga)

export default store;
