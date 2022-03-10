import * as ShoppingListActions from '../actions/ShoppingListActions'
import { put, all, takeLatest } from 'redux-saga/effects'
import * as ShoppingListAPI from '../api/ShoppingListAPI'

function* getShoppingListItems(action) {
  try {
    let shoppingListResponse = yield(ShoppingListAPI.getShoppingListItems())
    yield put(ShoppingListActions.receiveShoppingListItems(shoppingListResponse.data));
  } catch (e) {
    console.log(e);
  }
}

function* deleteShoppingListItem(action) {
  try {
    yield(ShoppingListAPI.deleteShoppingListItem(action.itemID))
    yield put(ShoppingListActions.crudCreateSuccess());
  } catch (e) {
    console.log(e);
  }
}

function* createShoppingListItems(action) {
  try {
    // const weatherData = yield call(fetchWeather);
    yield put(ShoppingListActions.crudCreateSuccess());
  } catch (e) {
    console.log(e);
  }
}

function* updateShoppingListItems(action) {
  try {
    // const weatherData = yield call(fetchWeather);
    yield put(ShoppingListActions.crudCreateSuccess());
  } catch (e) {
    console.log(e);
  }
}

    
function* watchAll() {
  yield all([
    takeLatest(ShoppingListActions.REQUEST_SHOPPING_LIST_ITEMS, getShoppingListItems),
    takeLatest(ShoppingListActions.UPDATE_SHOPPING_LIST_ITEM, updateShoppingListItems),
    takeLatest(ShoppingListActions.CREATE_SHOPPING_LIST_ITEM, createShoppingListItems),
    takeLatest(ShoppingListActions.DELETE_SHOPPING_LIST_ITEM, deleteShoppingListItem),
  ]);
}
export default watchAll;