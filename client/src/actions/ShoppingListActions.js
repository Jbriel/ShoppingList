
export const REQUEST_SHOPPING_LIST_ITEMS = "REQUEST_SHOPPING_LIST_ITEMS"
export const RECEIVE_SHOPPING_LIST_ITEMS = "RECEIVE_SHOPPING_LIST_ITEMS"
export const UPDATE_SHOPPING_LIST_ITEM = "UPDATE_SHOPPING_LIST_ITEM"

export const getShoppingListItems = () => ({ type: REQUEST_SHOPPING_LIST_ITEMS })
export const receiveShoppingListItems = (shoppingListItems) => ({type: RECEIVE_SHOPPING_LIST_ITEMS, shoppingListItems: shoppingListItems})
export const updateShoppingListItem = itemData => ({ type: UPDATE_SHOPPING_LIST_ITEM, itemData })