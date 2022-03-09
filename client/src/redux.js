import { createStore, applyMiddleware } from "redux";

import {testSagas} from './sagas'
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
// reducer with initial state

const sagaMiddleware = createSagaMiddleware()
export default createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
// sagaMiddleware.run(testSagas.helloSaga)
