import {RECEIVE_SHOPPING_LIST_ITEMS} from '../actions/ShoppingListActions'

export default function shoppingListReducer(state = {shoppingListItems: [], type: ''}, action) {
    switch (action.type) {
      case RECEIVE_SHOPPING_LIST_ITEMS:
        return { ...state, shoppingListItems: action.shoppingListItems, type: action.type};
      default:
        return state;
    }
  }
  