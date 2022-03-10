import {RECEIVE_SHOPPING_LIST_ITEMS, CRUD_REQUEST_SUCCESS} from '../actions/ShoppingListActions'

export default function shoppingListReducer(state = {shoppingListItems: [], type: ''}, action) {
    switch (action.type) {
      case RECEIVE_SHOPPING_LIST_ITEMS:
        return { ...state, shoppingListItems: action.shoppingListItems, type: action.type};
      case CRUD_REQUEST_SUCCESS:
        return { ...state,type: action.type};
      default:
        return state;
    }
  }
