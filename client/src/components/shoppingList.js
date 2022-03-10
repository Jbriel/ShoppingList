
import React, { useState, useEffect } from 'react';
import {RECEIVE_SHOPPING_LIST_ITEMS} from '../actions/ShoppingListActions'

const ShoppingList = (props) => {
  const [shoppingListItems, setShoppingListItems] = useState([]);
  
  useEffect(() => {
    if(shoppingListItems.length == 0){
      props.getShoppingListItems()
    }
    if(props.type == RECEIVE_SHOPPING_LIST_ITEMS){
      setShoppingListItems(props.shoppingListItems) 
    }
  }, [props.type])
  
  return (
    <div>
      <h1>{shoppingListItems.length?shoppingListItems[0]:'empty'}</h1>

      <button onClick={() => props.getShoppingListItems()}>
        CLICK ME
      </button>
    </div>
  );
}

export default ShoppingList