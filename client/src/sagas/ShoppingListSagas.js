import {REQUEST_SHOPPING_LIST_ITEMS, receiveShoppingListItems} from '../actions/ShoppingListActions'
import { put, all, takeLatest } from 'redux-saga/effects'

function* getShoppingListItems(action) {
  try {
    // const weatherData = yield call(fetchWeather);
    let shoppingListItems = []
    yield put(receiveShoppingListItems(shoppingListItems));
  } catch (e) {
    console.log(e);
  }
}

    
function* watchAll() {
  yield all([
    takeLatest(REQUEST_SHOPPING_LIST_ITEMS, getShoppingListItems),
  ]);
}
export default watchAll;