
export const REQUEST_SHOPPING_LIST_ITEMS = "REQUEST_SHOPPING_LIST_ITEMS"
export const RECEIVE_SHOPPING_LIST_ITEMS = "RECEIVE_SHOPPING_LIST_ITEMS"
export const UPDATE_SHOPPING_LIST_ITEM = "UPDATE_SHOPPING_LIST_ITEM"
export const CREATE_SHOPPING_LIST_ITEM = "CREATE_SHOPPING_LIST_ITEM"
export const DELETE_SHOPPING_LIST_ITEM = "DELETE_SHOPPING_LIST_ITEM"
export const CRUD_REQUEST_SUCCESS = "CRUD_REQUEST_SUCCESS"

export const getShoppingListItems = () => ({ type: REQUEST_SHOPPING_LIST_ITEMS })
export const receiveShoppingListItems = (shoppingListItems) => ({type: RECEIVE_SHOPPING_LIST_ITEMS, shoppingListItems: shoppingListItems})

export const updateShoppingListItem = itemData => ({ type: UPDATE_SHOPPING_LIST_ITEM, itemData })
export const createShoppingListItem = itemData => ({ type: CREATE_SHOPPING_LIST_ITEM, itemData })
export const deleteShoppingListItem = itemID => ({ type: DELETE_SHOPPING_LIST_ITEM, itemID })

export const crudCreateSuccess = () => ({ type: CRUD_REQUEST_SUCCESS })